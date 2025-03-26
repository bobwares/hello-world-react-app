#!/bin/bash

# Combined Project Compilation Script - Version 1.0
# This script executes existing compilation scripts and combines their outputs into a single markdown document: project.md

# Paths to scripts
CONFIG_SCRIPT="./config-files.sh"
SOURCE_SCRIPT="./source-code.sh"
IAC_SCRIPT="./iac-files.sh"

# Execute the scripts
bash "$CONFIG_SCRIPT"
bash "$SOURCE_SCRIPT"
bash "$IAC_SCRIPT"

# Create or clear the combined markdown file
COMBINED_FILE="project.md"
echo "# Project Documentation" > "$COMBINED_FILE"
echo "" >> "$COMBINED_FILE"

# Append config-files.md
if [ -f "config-files.md" ]; then
    cat config-files.md >> "$COMBINED_FILE"
else
    echo "Warning: config-files.md not found." >&2
fi

# Append source-code.md
if [ -f "source-code.md" ]; then
    cat source-code.md >> "$COMBINED_FILE"
else
    echo "Warning: source-code.md not found."
fi

## Append unit-test-files.md
#if [ -f "unit-test-files.md" ]; then
#    cat ./unit-test-files.md >> "$COMBINED_FILE"
#else
#    echo "Warning: unit-test-files.md not found."
#fi

## Append iac-report.md
#if [ -f "iac-report.md" ]; then
#    cat ./iac-report.md >> "$COMBINED_FILE"
#else
#    echo "Warning: iac-report.md not found."
#fi

# Notify completion
echo "Combined project compilation complete. See $COMBINED_FILE."