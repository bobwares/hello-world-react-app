#!/bin/bash
# config-file.sh - Version 1.5
# A script to gather all config files in the project into a markdown file.
# Outputs to ./ai/config-files.md and assumes the current directory is project-root/ai.

# Define the output file
OUTPUT_DIR="./"
OUTPUT_FILE="$OUTPUT_DIR/config-files.md"

# Create or clear the output file
echo "# Configuration Files Compilation" > $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# List of configuration files to include
CONFIG_FILES=(
  ".eslintrc.js"
  ".gitignore"
  ".prettierrc"
  "nest-cli.json"
  "package.json"
  "tsconfig.build.json"
  "tsconfig.json"
  "jest.config.ts"
  "jest.config.js"
  ".env"
  "serverless.yml"
  "Dockerfile"
)
# Iterate through the list of config files
for file in "${CONFIG_FILES[@]}"; do
    # Resolve the path relative to the project root
    FILE_PATH="../$file"

    if [ -f "$FILE_PATH" ]; then
        echo "Processing file: $FILE_PATH"

        # Append a header for the file
        echo "## $file" >> $OUTPUT_FILE

        # Use json for .json files and js for others
        if [[ "$file" == *.json ]]; then
            echo '```json' >> $OUTPUT_FILE
        else
            echo '```javascript' >> $OUTPUT_FILE
        fi

        # Append the content of the file
        cat "$FILE_PATH" >> $OUTPUT_FILE
        echo '```' >> $OUTPUT_FILE
        echo "" >> $OUTPUT_FILE
    else
        echo "File not found: $FILE_PATH"
    fi
done

echo "Compilation complete. Check the $OUTPUT_FILE file in ./."
