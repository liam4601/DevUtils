# CLAUDE.md

DevUtils - A comprehensive SaaS toolkit with 47+ utilities for developers focused on data processing, code transformation, and debugging support. The platform operates completely offline to ensure user data privacy and security.

## Project Overview

**Project Name**: DevUtils  
**Type**: Client-side SaaS platform for developer utilities  
**Architecture**: Single Page Application with offline-first approach

### Technology Stack

- **Frontend**: Next.js 14+ with App Router + TypeScript + Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: Zustand for global state
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom design system
- **Development**: ESLint + Prettier + Husky for code quality
- **Deployment**: Vercel (recommended) or static hosting

### Core Principles

- **Privacy First**: All processing happens in browser, zero data transmission
- **Offline Capable**: Full functionality without internet connection
- **Performance**: Response time <100ms for typical inputs
- **Accessibility**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first design approach

## Essential Commands

### Development

- `npm run dev`: Start development server (port 3000)
- `npm run build`: Build production bundle
- `npm run start`: Start production server
- `npm run export`: Export static site

### Code Quality

- `npm run lint`: Run ESLint on all TypeScript files
- `npm run lint:fix`: Auto-fix ESLint issues
- `npm run format`: Format code with Prettier
- `npm run type-check`: Run TypeScript compiler check

### Testing

- `npm test`: Run all tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Generate test coverage report

## File Structure and Boundaries

### Safe to Edit

- `/src/` - All source code
- `/public/` - Static assets and favicons
- `/docs/` - Documentation files
- `/components/` - React components
- `/lib/` - Utility functions and converters
- `/hooks/` - Custom React hooks
- `/stores/` - Zustand store definitions
- `/types/` - TypeScript type definitions

### Never Touch

- `/node_modules/` - Dependencies
- `/.next/` - Next.js build cache
- `/out/` - Static export output
- `/.vercel/` - Vercel deployment cache

### Requires Review

- `/package.json` - Dependency changes
- `/next.config.js` - Build configuration
- `/tailwind.config.js` - Styling configuration
- `/tsconfig.json` - TypeScript configuration

## Tool Categories and Implementation

### Data Format Converters (Priority 1)

1. **JSON Tools**

   - `components/tools/json-formatter.tsx` - JSON formatter/minifier/validator
   - `components/tools/json-to-csv.tsx` - JSON ↔ CSV converter
   - `components/tools/json-to-yaml.tsx` - JSON ↔ YAML converter
   - Location: `/src/components/tools/data-formats/`

2. **Web Format Converters**
   - `components/tools/html-to-jsx.tsx` - HTML ↔ JSX converter
   - `components/tools/query-string-json.tsx` - Query String ↔ JSON converter
   - Location: `/src/components/tools/web-formats/`

### Encoding & Decoding Tools (Priority 1)

1. **Base Encoding**

   - `components/tools/base64-encoder.tsx` - Base64 encoder/decoder
   - `components/tools/url-encoder.tsx` - URL encoding/decoding
   - `components/tools/html-entities.tsx` - HTML entities encoder/decoder
   - Location: `/src/components/tools/encoding/`

2. **Hash & Cryptography**
   - `components/tools/hash-generator.tsx` - MD5/SHA1/SHA256/SHA512
   - `components/tools/uuid-generator.tsx` - UUID v4 generator
   - `components/tools/password-generator.tsx` - Password generator
   - Location: `/src/components/tools/crypto/`

### Unit & Format Converters (Priority 2)

1. **Time & Date**

   - `components/tools/timestamp-converter.tsx` - Unix timestamp converter
   - `components/tools/date-formatter.tsx` - Date format converter
   - Location: `/src/components/tools/time-date/`

2. **Number Systems**
   - `components/tools/number-base-converter.tsx` - Binary/Decimal/Hex converter
   - `components/tools/color-converter.tsx` - RGB/HEX/HSL converter
   - Location: `/src/components/tools/converters/`

### Development Tools (Priority 1)

1. **Code Debugging**

   - `components/tools/jwt-debugger.tsx` - JWT decode/verify/generate
   - `components/tools/regex-tester.tsx` - RegExp tester with highlighting
   - `components/tools/sql-formatter.tsx` - SQL formatter
   - Location: `/src/components/tools/dev-debug/`

2. **Text Processing**
   - `components/tools/text-diff.tsx` - Text diff checker
   - `components/tools/string-inspector.tsx` - String analysis tool
   - `components/tools/case-converter.tsx` - Text case converter
   - Location: `/src/components/tools/text-processing/`

### Utility Tools (Priority 2)

1. **Generators**
   - `components/tools/qr-generator.tsx` - QR code generator
   - `components/tools/lorem-generator.tsx` - Lorem Ipsum generator
   - Location: `/src/components/tools/generators/`

## Code Style and Standards

### TypeScript Guidelines

- Use strict TypeScript configuration
- All components must have proper TypeScript interfaces
- Prefer `interface` over `type` for component props
- Use proper typing for all tool functions

```typescript
// ✅ Good
interface ToolProps {
  input: string;
  onOutput: (result: string) => void;
  options?: ToolOptions;
}

const JsonFormatter: React.FC<ToolProps> = ({ input, onOutput, options }) => {
  // Implementation
};

// ❌ Bad
const JsonFormatter = ({ input, onOutput, options }: any) => {
  // Implementation
};
```

### React Component Standards

- Use functional components with hooks exclusively
- Implement proper error boundaries for each tool
- Use custom hooks for complex tool logic
- Always include proper loading and error states

```typescript
// ✅ Good Component Structure
const ToolComponent: React.FC<ToolProps> = ({ input, onOutput }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = useCallback(async () => {
    try {
      setIsProcessing(true);
      setError(null);
      const result = await processInput(input);
      onOutput(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  }, [input, onOutput]);

  return <div className="tool-container">{/* Tool UI */}</div>;
};
```

### Naming Conventions

- **Files**: kebab-case (`json-formatter.tsx`, `base64-encoder.tsx`)
- **Components**: PascalCase (`JsonFormatter`, `Base64Encoder`)
- **Functions**: camelCase (`formatJson`, `encodeBase64`)
- **Constants**: SCREAMING_SNAKE_CASE (`DEFAULT_OPTIONS`, `MAX_FILE_SIZE`)
- **Tool Categories**: kebab-case directories (`data-formats/`, `encoding/`)

### Tailwind CSS Standards

- Use design system tokens for spacing, colors, and typography
- Implement responsive design with mobile-first approach
- Use semantic class names for reusable components
- Follow consistent spacing and layout patterns

```typescript
// ✅ Good Tailwind Usage
<div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
    Tool Title
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Tool content */}
  </div>
</div>
```

## Tool Implementation Standards

### Tool Component Structure

Each tool must follow this structure:

```
/src/components/tools/[category]/[tool-name]/
├── index.tsx              # Main tool component
├── hooks/
│   └── use-[tool-name].ts # Custom hook for tool logic
├── types.ts               # Tool-specific types
└── utils.ts               # Tool-specific utilities
```

### Tool Interface Requirements

- **Input Area**: Textarea or file upload with drag & drop
- **Output Area**: Formatted result with copy button
- **Options Panel**: Tool-specific configuration options
- **Error Handling**: Clear error messages with suggestions
- **Loading States**: Progress indicators for processing

### Performance Requirements

- **Response Time**: <100ms for typical inputs
- **Large Files**: Use Web Workers for files >1MB
- **Memory Usage**: Efficient processing to prevent browser crashes
- **Progressive Enhancement**: Core functionality works without JavaScript

## UI/UX Implementation

### Layout Components

```
/src/components/layout/
├── sidebar.tsx           # Navigation sidebar with tool categories
├── header.tsx            # App header with search and theme toggle
├── tool-layout.tsx       # Standard layout for all tools
└── mobile-nav.tsx        # Mobile navigation drawer
```

### Shared Components

```
/src/components/ui/
├── button.tsx            # Reusable button component
├── input.tsx             # Input field with validation
├── textarea.tsx          # Textarea with auto-resize
├── select.tsx            # Dropdown select component
├── copy-button.tsx       # Copy to clipboard button
├── file-upload.tsx       # Drag & drop file upload
└── error-boundary.tsx    # Error boundary wrapper
```

### Theme System

- Support for light/dark/system themes
- Custom color palette for developer tools
- Consistent typography scale
- Accessible color contrasts (WCAG AA)

## State Management with Zustand

### Store Structure

```typescript
// /src/stores/app-store.ts
interface AppState {
  // Theme management
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;

  // Tool organization
  favoriteTools: string[];
  recentTools: string[];
  addFavorite: (toolId: string) => void;
  addRecent: (toolId: string) => void;

  // Settings
  settings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
}
```

### Tool History Management

- Track last 10 operations per tool
- Store in localStorage for persistence
- Include input/output for quick access
- Clear history option for privacy

## Error Handling and Validation

### Input Validation

- Validate all inputs before processing
- Provide real-time feedback for invalid inputs
- Show helpful error messages with suggestions
- Graceful handling of edge cases

```typescript
// ✅ Good Error Handling
const validateJsonInput = (input: string): ValidationResult => {
  if (!input.trim()) {
    return { isValid: false, error: "Input cannot be empty" };
  }

  try {
    JSON.parse(input);
    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      error: `Invalid JSON: ${error.message}`,
      suggestion: "Check for missing quotes, commas, or brackets",
    };
  }
};
```

### Error Boundaries

- Implement error boundaries around each tool
- Fallback UI for tool failures
- Error reporting for debugging
- Recovery options for users

## Performance Optimization

### Code Splitting

- Lazy load tool components
- Split by tool categories
- Dynamic imports for heavy utilities
- Optimize bundle sizes

```typescript
// ✅ Good Code Splitting
const JsonFormatter = lazy(() => import("./tools/data-formats/json-formatter"));
const Base64Encoder = lazy(() => import("./tools/encoding/base64-encoder"));
```

### Web Workers

- Use Web Workers for CPU-intensive operations
- File processing for large files
- Complex transformations
- Background processing

### Caching Strategy

- Cache tool results in memory
- LocalStorage for user preferences
- Service Worker for offline capability
- Efficient re-rendering strategies

## Security and Privacy

### Data Protection

- No external API calls for processing
- All operations happen in browser
- No data collection or analytics
- Clear privacy policy

### Content Security

- Safe HTML rendering in preview tools
- XSS protection for user inputs
- File type validation for uploads
- Secure processing of user data

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- Keyboard navigation for all tools
- Screen reader compatibility
- Proper ARIA labels and roles
- High contrast mode support
- Focus management

### Implementation Standards

```typescript
// ✅ Good Accessibility
<button
  onClick={handleCopy}
  aria-label="Copy result to clipboard"
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <CopyIcon className="w-4 h-4" aria-hidden="true" />
  <span className="sr-only">Copy</span>
</button>
```

## Development Workflow

### Component Development

1. Create component in appropriate category folder
2. Implement proper TypeScript interfaces
3. Add comprehensive error handling
4. Include loading and empty states
5. Test with various input types
6. Ensure accessibility compliance

### Testing Strategy

- Unit tests for utility functions
- Integration tests for tool components
- Accessibility testing with axe
- Manual testing on different devices
- Performance testing with large inputs

### Git Workflow

- `main`: Production-ready code
- `develop`: Integration branch
- `feature/tool-name`: Individual tool features
- `fix/issue-description`: Bug fixes

### Commit Conventions

```
feat(tools): add JSON formatter with syntax highlighting
fix(encoding): handle edge cases in Base64 decoder
docs(readme): update tool list and usage examples
```

## Special Instructions for Claude

### When Adding New Tools

1. Follow the established file structure in `/src/components/tools/[category]/`
2. Implement proper error handling and validation
3. Add TypeScript interfaces for all props and state
4. Include accessibility features (ARIA labels, keyboard navigation)
5. Test with various input sizes and edge cases
6. Add to the tool registry in `/src/lib/tools-registry.ts`

### Code Review Focus

1. **Privacy**: Ensure no data leaves the browser
2. **Performance**: Check for efficient algorithms and memory usage
3. **Accessibility**: Verify WCAG compliance
4. **Error Handling**: Comprehensive edge case coverage
5. **TypeScript**: Proper typing throughout

### Implementation Priorities

1. **Phase 1**: Core data format tools (JSON, Base64, URL encoding)
2. **Phase 2**: Development tools (JWT, RegExp, Text Diff)
3. **Phase 3**: Converters and generators
4. **Phase 4**: Advanced features and optimizations

### Quality Standards

- All tools must work offline
- Response time <100ms for typical inputs
- Comprehensive error handling
- Mobile-responsive design
- Full keyboard accessibility

---

_Update this CLAUDE.md file when adding new tools, changing architecture, or modifying development standards. Use the `#` command in Claude Code to automatically incorporate new insights._
