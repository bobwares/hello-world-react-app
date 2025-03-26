#!/bin/bash
# source-code.sh - Version 1.6
# A script to gather all .ts, .tsx, and .js files under the src directory into a markdown file.
# It also gathers all unit test files matching *.test.* under ../code/test.
# Outputs:
#   - ./ai/source-code.md
#   - ./ai/unit-test-files.md

# Define output directories and files
OUTPUT_DIR="./"
SOURCE_OUTPUT_FILE="$OUTPUT_DIR/source-code.md"
TEST_OUTPUT_FILE="$OUTPUT_DIR/unit-test-files.md"

# Define source and test directories
SRC_DIR="../src"
TEST_DIR="../test"

# Ensure the output directory exists
mkdir -p "$OUTPUT_DIR"

### ========================
### PROCESS SOURCE CODE FILES
### ========================
if [ -d "$SRC_DIR" ]; then
    echo "# Source Code Compilation" > "$SOURCE_OUTPUT_FILE"
    echo "" >> "$SOURCE_OUTPUT_FILE"

    # Generate a list of all .ts, .tsx, and .js files
    echo "## List of Source Files" >> "$SOURCE_OUTPUT_FILE"
    echo "" >> "$SOURCE_OUTPUT_FILE"

    FILE_LIST=$(find "$SRC_DIR" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) | sort)

    if [ -z "$FILE_LIST" ]; then
        echo "No .ts, .tsx, or .js files found in $SRC_DIR."
    else
        echo "$FILE_LIST" | sed "s|$SRC_DIR/|  - |" >> "$SOURCE_OUTPUT_FILE"
        echo "" >> "$SOURCE_OUTPUT_FILE"

        # Generate a directory structure diagram
        echo "## Project Directory Structure" >> "$SOURCE_OUTPUT_FILE"
        echo '```plaintext' >> "$SOURCE_OUTPUT_FILE"
        (cd "$SRC_DIR" && find . -type d | sed 's|[^/]*/|  |g;s|  | |g;s|/$|/|g') >> "$SOURCE_OUTPUT_FILE"
        echo '```' >> "$SOURCE_OUTPUT_FILE"
        echo "" >> "$SOURCE_OUTPUT_FILE"

        # Append the content of each file to the output
        echo "$FILE_LIST" | while read -r file; do
            echo "Processing source file: $file"

            RELATIVE_PATH="${file#"$SRC_DIR/"}"
            echo "## $RELATIVE_PATH" >> "$SOURCE_OUTPUT_FILE"
            echo '```typescript' >> "$SOURCE_OUTPUT_FILE"
            cat "$file" >> "$SOURCE_OUTPUT_FILE"
            echo '```' >> "$SOURCE_OUTPUT_FILE"
            echo "" >> "$SOURCE_OUTPUT_FILE"
        done
    fi

    echo "Source code compilation complete. Check $SOURCE_OUTPUT_FILE."
else
    echo "Warning: Source directory $SRC_DIR does not exist. Skipping source code compilation."
fi

### ============================
### PROCESS UNIT TEST FILES
### ============================
if [ -d "$TEST_DIR" ]; then
    echo "# Unit Test Files Compilation" > "$TEST_OUTPUT_FILE"
    echo "" >> "$TEST_OUTPUT_FILE"

    # Generate a list of test files (*.test.*)
    echo "## List of Unit Test Files" >> "$TEST_OUTPUT_FILE"
    echo "" >> "$TEST_OUTPUT_FILE"

    TEST_FILE_LIST=$(find "$TEST_DIR" -type f -name "*.test.*" | sort)

    if [ -z "$TEST_FILE_LIST" ]; then
        echo "No test files found in $TEST_DIR."
    else
        echo "$TEST_FILE_LIST" | sed "s|$TEST_DIR/|  - |" >> "$TEST_OUTPUT_FILE"
        echo "" >> "$TEST_OUTPUT_FILE"

        # Generate a directory structure diagram
        echo "## Test Directory Structure" >> "$TEST_OUTPUT_FILE"
        echo '```plaintext' >> "$TEST_OUTPUT_FILE"
        (cd "$TEST_DIR" && find . -type d | sed 's|[^/]*/|  |g;s|  | |g;s|/$|/|g') >> "$TEST_OUTPUT_FILE"
        echo '```' >> "$TEST_OUTPUT_FILE"
        echo "" >> "$TEST_OUTPUT_FILE"

        # Append the content of each test file to the output
        echo "$TEST_FILE_LIST" | while read -r file; do
            echo "Processing test file: $file"

            RELATIVE_PATH="${file#"$TEST_DIR/"}"
            echo "## $RELATIVE_PATH" >> "$TEST_OUTPUT_FILE"
            echo '```typescript' >> "$TEST_OUTPUT_FILE"
            cat "$file" >> "$TEST_OUTPUT_FILE"
            echo '```' >> "$TEST_OUTPUT_FILE"
            echo "" >> "$TEST_OUTPUT_FILE"
        done
    fi

    echo "Unit test compilation complete. Check $TEST_OUTPUT_FILE."
else
    echo "Warning: Test directory $TEST_DIR does not exist. Skipping unit test compilation."
fi
