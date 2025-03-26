#!/bin/bash
# iac.sh - Version 1.0
# A script to gather all .tf (Terraform) files under the iac directory into a markdown file.
# Includes a list of files and a directory structure diagram at the top. Outputs to ./iac-report.md.

# Define the output file
OUTPUT_DIR="./"
OUTPUT_FILE="$OUTPUT_DIR/iac-report.md"

# Ensure the ../code/iac directory exists
IAC_DIR="../iac"
if [ ! -d "$IAC_DIR" ]; then
    echo "Error: Infrastructure-as-Code directory $IAC_DIR does not exist."
    exit 1
fi

# Create or clear the output file
echo "# Infrastructure-as-Code (IaC) Report" > $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# Generate a list of all .tf files
echo "## List of Terraform Files" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# Gather file list
FILE_LIST=$(find "$IAC_DIR" -type f -name "*.tf")

if [ -z "$FILE_LIST" ]; then
    echo "No .tf files found in $IAC_DIR."
    exit 1
fi

echo "$FILE_LIST" | sed "s|$IAC_DIR/|  - |" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# Generate a directory structure diagram
echo "## Project Directory Structure" >> $OUTPUT_FILE
echo '```plaintext' >> $OUTPUT_FILE
find "$IAC_DIR" -type d | sed 's|[^/]*/|  |g;s|  | |g;s|/$|/|g' >> $OUTPUT_FILE
echo '```' >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# Append the content of each Terraform file to the output
echo "$FILE_LIST" | while read -r file; do
    echo "Processing file: $file"

    # Append a header for the file
    echo "## ${file#"$IAC_DIR/"}" >> $OUTPUT_FILE
    echo '```hcl' >> $OUTPUT_FILE

    # Append the content of the file
    cat "$file" >> $OUTPUT_FILE
    echo '```' >> $OUTPUT_FILE
    echo "" >> $OUTPUT_FILE
done

echo "Compilation complete. Check the iac-report.md file in the current directory."
