#!/bin/bash
# Human Engine — Install Script
# Copies framework files to ~/.claude/ and resolves @ paths for your system.

set -e

CLAUDE_DIR="$HOME/.claude"
HE_DIR="$CLAUDE_DIR/human-engine"
CMD_DIR="$CLAUDE_DIR/commands/he"
HOOK_DIR="$CLAUDE_DIR/hooks"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Installing Human Engine to $CLAUDE_DIR..."

# Create directories
mkdir -p "$CMD_DIR" "$HE_DIR/workflows" "$HE_DIR/references" "$HE_DIR/templates" "$HOOK_DIR"

# Copy framework files
cp "$SCRIPT_DIR/workflows/"*.md "$HE_DIR/workflows/"
cp "$SCRIPT_DIR/references/"*.md "$HE_DIR/references/"
cp "$SCRIPT_DIR/templates/"*.md "$HE_DIR/templates/"
cp "$SCRIPT_DIR/hooks/he-gate-enforcer.js" "$HOOK_DIR/"

# Copy commands and resolve paths
# Replace @~/.claude/ with the actual absolute path for this system
for f in "$SCRIPT_DIR/commands/"*.md; do
  filename=$(basename "$f")
  if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    # Windows (Git Bash / MSYS2): convert to forward-slash Windows path
    ABS_CLAUDE=$(cygpath -m "$CLAUDE_DIR")
  else
    # macOS / Linux: use home path directly
    ABS_CLAUDE="$CLAUDE_DIR"
  fi
  sed "s|@~/.claude/|@${ABS_CLAUDE}/|g" "$f" > "$CMD_DIR/$filename"
done

echo ""
echo "Installed:"
echo "  Commands:   $CMD_DIR/ ($(ls "$CMD_DIR"/*.md 2>/dev/null | wc -l) files)"
echo "  Workflows:  $HE_DIR/workflows/ ($(ls "$HE_DIR/workflows/"*.md 2>/dev/null | wc -l) files)"
echo "  References: $HE_DIR/references/ ($(ls "$HE_DIR/references/"*.md 2>/dev/null | wc -l) files)"
echo "  Templates:  $HE_DIR/templates/ ($(ls "$HE_DIR/templates/"*.md 2>/dev/null | wc -l) files)"
echo "  Hook:       $HOOK_DIR/he-gate-enforcer.js"
echo ""
echo "To enable enforcement in a project, run: touch .human-engine"
echo ""
echo "To register the hook, add to ~/.claude/settings.json under hooks.PreToolUse:"
echo '  {"type": "command", "command": "node \"'$HOOK_DIR'/he-gate-enforcer.js\""}'
echo ""
echo "Done."
