#!/bin/bash

# generate-structure.sh - Version 3.4 (Enhanced with JavaScript test detection and more config handling)
# Generates a JSON-formatted document from the ../ root directory named directory-structure.json

OUTPUT_FILE="directory-structure.json"
ROOT="../"
SKIP_DIR="\.terraform|\.git|node_modules|\.idea|\.serverless|\.js\.map|build|dist|coverage|/ai/"

# Temporary file for intermediate results
temp_file=$(mktemp)

# Start JSON array
echo "[" > "$OUTPUT_FILE"

# Find all files, exclude unwanted directories, and create JSON objects
find "$ROOT" -type f | grep -Ev "$SKIP_DIR" | while read -r file; do
    RELATIVE_PATH=$(dirname "${file#$ROOT}")
    FILE_NAME=$(basename "$file")

    # Determine file type based on naming conventions and name patterns
    case "$FILE_NAME" in
        tsconfig.json)
            FILE_TYPE="typescript config"
            ;;
        serverless.yml)
            FILE_TYPE="serverless configuration"
            ;;
        jest.config.js|jest.config.ts)
            FILE_TYPE="jest configuration"
            ;;
        webpack.config.js)
            FILE_TYPE="webpack configuration"
            ;;
        babel.config.js)
            FILE_TYPE="babel configuration"
            ;;
        package.json)
            FILE_TYPE="project manifest"
            ;;
        *.test.ts|*.test.tsx)
            FILE_TYPE="unit test"
            ;;
        *.spec.ts|*.spec.tsx)
            FILE_TYPE="component test"
            ;;
        *.stories.tsx)
            FILE_TYPE="storybook story"
            ;;
        *.tsx)
            FILE_TYPE="react component"
            ;;
        *.jsx)
            FILE_TYPE="react component (JSX)"
            ;;
        *.js)
            if [[ "$FILE_NAME" == *test.js* ]]; then
                FILE_TYPE="javascript test"
            else
                FILE_TYPE="javascript module"
            fi
            ;;
        *.ts)
            FILE_TYPE="typescript module"
            ;;
        *.sh)
            FILE_TYPE="shell script"
            ;;
        *.md)
            FILE_TYPE="markdown"
            ;;
        *.json)
            FILE_TYPE="json"
            ;;
        *.yml|*.yaml)
            FILE_TYPE="yaml config"
            ;;
        *.html)
            FILE_TYPE="html"
            ;;
        *.css)
            FILE_TYPE="css"
            ;;
        *.scss)
            FILE_TYPE="sass stylesheet"
            ;;
        *)
            FILE_TYPE="${FILE_NAME##*.}"
            ;;
    esac

    echo "  {\"path\": \"$RELATIVE_PATH\", \"file\": \"$FILE_NAME\", \"type\": \"$FILE_TYPE\"}," >> "$temp_file"
done

# Remove trailing comma from last JSON element and close JSON array
sed '$ s/,$//' "$temp_file" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

# Clean up temporary file
rm "$temp_file"

# Completion message
echo "Directory structure generated successfully. Check $OUTPUT_FILE."
