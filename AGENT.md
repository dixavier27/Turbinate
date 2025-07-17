# AGENT.md - Turbinate Project

## Commands
- **Test**: `npm test` (currently not configured)
- **Run**: `node index.js` (ES modules enabled)
- **Install deps**: `npm install`

## Project Structure
- **Type**: Node.js ES modules project (`"type": "module"` in package.json)
- **Entry point**: index.js
- **Currently minimal setup** - only package.json exists

## Code Style & Conventions
- **ES Modules**: Use `import/export` syntax (not CommonJS require)
- **File extensions**: Use `.js` for ES modules
- **Package management**: npm (package.json present)

## Architecture Notes
- Clean slate Node.js project ready for development
- No existing dependencies or build tools configured
- No testing framework currently set up

## Development Setup
- Run `npm init` if you need to reconfigure package.json
- Consider adding test framework (Jest, Mocha, etc.) when implementing tests
- Consider adding linting (ESLint) and formatting (Prettier) tools
