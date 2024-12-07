# Commit Guide

This guide establishes conventions for creating consistent and meaningful commit messages in our project.

## Basic Format

```
<type>(<scope>): <short description>

- <detailed change 1>
- <detailed change 2>
- <detailed change 3>
```

## Commit Types

- `feat`: New feature or functionality
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Changes that don't affect code meaning (spaces, formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or modifying tests
- `chore`: Changes to build process, tools, dependencies, etc.

## Scope (Optional)

The scope should be the area of the project being modified:
- `auth`: Authentication
- `ui`: User Interface
- `api`: API endpoints or logic
- `db`: Database
- `deps`: Dependencies
- etc.

## Practical Examples

### New Feature
```
feat(auth): implement Google login

- Add OAuth button component
- Configure authentication endpoints
- Update user session handling
```

### Bug Fix
```
fix(ui): fix responsive design

- Adjust layout for mobile devices
- Fix sidebar overflow
- Update media query breakpoints
```

### Dependency Update
```
chore(deps): update dependencies

- Update Next.js to v15.0.4
- Update React to v19.0.0
- Update TypeScript types
```

## Additional Tips

1. Short description should be in present tense: "add" instead of "added"
2. Don't use period at the end of the short description
3. Detailed changes should be clear and specific
4. If the change breaks compatibility, add `BREAKING CHANGE:` in the message body

## Using with GitHub Extensions

If you're using GitHub extensions in your editor:
1. Stage your changes
2. Use this format to write your commit message
3. Sync with the remote repository using the extension

Remember: A good commit message helps other developers (and your future self) quickly understand what changes were made and why.
