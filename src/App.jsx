import { useState } from "react";

const roadmap = [
  {
    id: "html",
    label: "HTML",
    icon: "⬡",
    accent: "#f97316",
    badge: "Foundation",
    sections: [
      {
        name: "Semantics & Document Structure",
        items: [
          "Semantic elements: <article>, <section>, <aside>, <main>, <header>, <footer>, <nav>",
          "Document outline & correct heading hierarchy (h1–h6)",
          "ARIA roles, aria-label, aria-hidden, aria-live regions",
          "Meta tags: charset, viewport, og:, description for SEO",
          "data-* custom attributes and reading via dataset",
        ],
      },
      {
        name: "Forms & Input",
        items: [
          "All input types: text, email, tel, number, range, date, file, checkbox, radio, color",
          "Form attributes: action, method, enctype, novalidate, autocomplete",
          "HTML5 native validation: required, pattern, min, max, maxlength, step",
          "Fieldset + legend for grouped inputs; label association via for/id",
          "<datalist> for input suggestions; <output> element",
        ],
      },
      {
        name: "Media & Embeds",
        items: [
          "<picture> + <source> with srcset and sizes for responsive images",
          "<video> and <audio> with controls, autoplay, loop, fallback text",
          "Lazy loading: loading='lazy' on img/iframe",
          "Inline SVG vs external SVG: when to use each",
          "iframe: sandbox, allow, referrerpolicy attributes",
        ],
      },
      {
        name: "Advanced HTML",
        items: [
          "Web Components: Custom Elements, Shadow DOM, HTML Templates, slots",
          "<dialog> element: modal vs non-modal, showModal(), close()",
          "Content Security Policy via <meta http-equiv='Content-Security-Policy'>",
          "Microdata & Schema.org for structured data (SEO rich results)",
          "<template> element: inert fragments for JS-cloned DOM",
        ],
      },
    ],
  },
  {
    id: "css",
    label: "CSS",
    icon: "◈",
    accent: "#3b82f6",
    badge: "Foundation",
    sections: [
      {
        name: "Core Concepts",
        items: [
          "Box model: content → padding → border → margin; box-sizing: border-box",
          "Specificity scoring: inline (1,0,0,0), ID (0,1,0,0), class/pseudo (0,0,1,0), element (0,0,0,1)",
          "Cascade, inheritance and the 'initial', 'inherit', 'unset', 'revert' keywords",
          "Stacking context: what creates one (position+z-index, opacity<1, transform, etc.)",
          "BEM naming: block__element--modifier; SMACSS & ITCSS architecture",
        ],
      },
      {
        name: "Layout Systems",
        items: [
          "Flexbox: flex-grow, flex-shrink, flex-basis, align-content vs align-items, flex-wrap",
          "CSS Grid: grid-template-areas, auto-fill vs auto-fit, minmax(), implicit grid",
          "Subgrid: aligning nested grids to parent tracks",
          "Position: relative, absolute, fixed, sticky (scroll-parent gotchas)",
          "Multicol layout: column-count, column-gap, column-span",
        ],
      },
      {
        name: "Responsive & Modern CSS",
        items: [
          "Media queries: min-width, max-width, orientation, prefers-color-scheme, prefers-reduced-motion",
          "Container queries (@container): size queries on parent element",
          "Fluid typography with clamp(min, preferred, max)",
          "Logical properties: inline-start, block-end (RTL/LTR agnostic)",
          "Viewport units: vw, vh, dvh, svh, lvh — dynamic vs static",
        ],
      },
      {
        name: "Animations & Visual",
        items: [
          "@keyframes + animation shorthand: name, duration, timing-function, delay, iteration, fill-mode",
          "transition vs animation: when to use which",
          "transform: translate, rotate, scale, skew, matrix — GPU compositing with will-change",
          "CSS custom properties (--vars): dynamic theming, computed value cascade",
          "CSS Layers (@layer): explicit specificity ordering without !important",
        ],
      },
      {
        name: "Advanced Selectors & Features",
        items: [
          ":has() — parent selector; :is() / :where() for forgiving selector lists",
          "CSS Houdini: Typed OM, Paint API, Animation Worklet basics",
          "Scroll-driven animations (@scroll-timeline)",
          "CSS Nesting (native, no preprocessor needed)",
          "color-mix(), color-contrast() functions; wide gamut P3 colors",
        ],
      },
    ],
  },
  {
    id: "js",
    label: "JavaScript",
    icon: "◉",
    accent: "#eab308",
    badge: "Core",
    sections: [
      {
        name: "Language Fundamentals",
        items: [
          "var vs let vs const: hoisting, Temporal Dead Zone, function vs block scope",
          "Closures: lexical scoping, practical uses (counters, private state, factory functions)",
          "Prototypal inheritance: prototype chain, Object.create(), class syntax desugaring",
          "this keyword: default, implicit, explicit (call/apply/bind), new, arrow function binding",
          "Type coercion: == vs ===, truthy/falsy values, abstract equality algorithm",
        ],
      },
      {
        name: "Async JavaScript",
        items: [
          "Event loop: call stack, Web APIs, task queue vs microtask queue — execution order",
          "Promises: .then/.catch/.finally chaining, error propagation, unhandled rejections",
          "Promise combinators: Promise.all, Promise.race, Promise.allSettled, Promise.any",
          "async/await: error handling (try/catch), parallel vs sequential patterns",
          "Generators (function*): yield, iterator protocol, async generators for streaming",
        ],
      },
      {
        name: "ES6+ & Modern Features",
        items: [
          "Destructuring: nested, default values, aliasing; rest/spread in all contexts",
          "Optional chaining (?.) and nullish coalescing (??); logical assignment (??=, &&=, ||=)",
          "Symbol: unique keys, well-known symbols (Symbol.iterator, Symbol.toPrimitive)",
          "WeakMap / WeakSet / WeakRef: memory management and private class fields pattern",
          "Proxy & Reflect: traps (get, set, has), meta-programming, observable objects",
        ],
      },
      {
        name: "DOM & Browser APIs",
        items: [
          "Event delegation: capturing vs bubbling, stopPropagation vs stopImmediatePropagation",
          "MutationObserver, IntersectionObserver, ResizeObserver — performant DOM watching",
          "Custom Events (CustomEvent + dispatchEvent), event bus pattern",
          "requestAnimationFrame for 60fps animations; requestIdleCallback for background work",
          "History API (pushState, replaceState, popstate) for SPA routing",
        ],
      },
      {
        name: "Performance Patterns",
        items: [
          "Debounce vs throttle: implementation from scratch + use cases",
          "Memoization: caching with Map vs object, deep equality considerations",
          "Web Workers: offloading CPU work, postMessage, SharedArrayBuffer + Atomics",
          "Memory leaks: detached DOM nodes, forgotten timers/listeners, closure captures",
          "Module patterns: ES Modules (static analysis, tree-shaking), dynamic import()",
        ],
      },
      {
        name: "Design Patterns & DS/Algo",
        items: [
          "Design patterns: Observer, Singleton, Factory, Strategy, Command, Decorator",
          "Data structures: Map vs Object, Set vs Array, linked list, queue, stack implementations",
          "Time complexity (Big O): O(1), O(n), O(n log n), O(n²) — space complexity",
          "Sorting: bubble, insertion, merge, quicksort — when to use each",
          "Binary search, BFS, DFS — tree/graph traversal in JS",
        ],
      },
    ],
  },
  {
    id: "react",
    label: "React",
    icon: "⬡",
    accent: "#22d3ee",
    badge: "Core",
    sections: [
      {
        name: "Fundamentals & Rendering",
        items: [
          "JSX transpilation: React.createElement() under the hood, fragments (<>)",
          "Virtual DOM: what it is, diffing heuristics, key prop importance & pitfalls",
          "Reconciliation: same position same component = state preserved; key resets state",
          "Render phase vs commit phase: what happens in each",
          "Strict Mode: double-invocation to catch side effects, future-proofing",
        ],
      },
      {
        name: "Hooks — Deep Dive",
        items: [
          "useState: functional updater form, batching (React 18 automatic batching)",
          "useEffect: cleanup function, dependency array rules, missing dependency pitfalls",
          "useLayoutEffect: synchronous after DOM mutation, use for measurements",
          "useRef: DOM ref, mutable value without re-render, forwardRef + useImperativeHandle",
          "useMemo: memoize expensive computations — referential stability vs expensive calc",
          "useCallback: stable function reference for child prop/dependency array",
          "useContext: consumer re-renders whenever value changes — splitting contexts",
          "useReducer: complex state, dispatch pattern, predictable state transitions",
          "useTransition + useDeferredValue: mark updates as non-urgent (concurrent)",
          "useId: stable SSR-safe unique IDs; useSyncExternalStore for external stores",
        ],
      },
      {
        name: "Custom Hooks",
        items: [
          "useFetch / useQuery: loading, error, data states with abort controller",
          "useDebounce / useThrottle: wrapping values or callbacks",
          "useLocalStorage: sync state to localStorage with storage event listener",
          "usePrevious: capture previous render's value via useRef",
          "useOnClickOutside: ref + document event listener pattern",
          "useMediaQuery: window.matchMedia + event listener",
          "useIntersectionObserver: lazy load, infinite scroll trigger",
        ],
      },
      {
        name: "State Management",
        items: [
          "Context API: when it's enough, performance problem with large value objects",
          "Redux Toolkit: createSlice, createAsyncThunk, RTK Query for data fetching",
          "Zustand: minimal boilerplate, selectors to prevent extra re-renders",
          "Jotai / Recoil: atomic state model, derived atoms, async atoms",
          "TanStack Query: caching, staleTime, gcTime, queryKey design, mutations + optimistic updates",
          "URL state: nuqs / useSearchParams for shareable, bookmarkable state",
        ],
      },
      {
        name: "Patterns & Architecture",
        items: [
          "Compound components: implicit state sharing via Context (Tabs, Accordion, Select)",
          "Controlled vs uncontrolled: value+onChange vs defaultValue+ref",
          "Render props: function as children, flexibility vs composition overhead",
          "HOC pattern: cross-cutting concerns, wrapper hell problem",
          "Error boundaries: componentDidCatch, getDerivedStateFromError, react-error-boundary",
          "Portals: rendering outside parent DOM, use cases (modals, tooltips, toasts)",
          "Suspense + lazy: code splitting, suspense for data (TanStack Query integration)",
        ],
      },
      {
        name: "Performance Optimization",
        items: [
          "React.memo: shallow comparison, custom comparator function",
          "When useMemo/useCallback hurts: extra memory, stale closures",
          "Windowing / virtualization: react-window, TanStack Virtual — only render visible rows",
          "Code splitting: React.lazy + dynamic import, route-based splitting",
          "React Profiler: flame graph, ranked chart, why-did-you-render integration",
          "Avoiding prop drilling without Context: component composition (slot pattern)",
        ],
      },
      {
        name: "React 18/19 & Internals",
        items: [
          "Fiber architecture: unit of work, priority lanes, time-slicing",
          "Concurrent rendering: interruptible renders, no tearing guarantees",
          "React 19: Actions (async transitions), use() hook, Server Components basics",
          "Server Components vs Client Components: serialization boundary, no hooks in RSC",
          "New hooks in React 19: useOptimistic, useFormStatus, useActionState",
        ],
      },
    ],
  },
  {
    id: "nextjs",
    label: "Next.js",
    icon: "▲",
    accent: "#a78bfa",
    badge: "Advanced",
    sections: [
      {
        name: "Routing (App Router)",
        items: [
          "File conventions: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx, template.tsx",
          "Dynamic routes: [id], catch-all [...slug], optional [[...slug]]",
          "Route groups: (group) folders for shared layouts without URL segment",
          "Parallel routes (@slot) and intercepting routes (..) for modals",
          "Link component: prefetching behavior, scroll, replace props",
        ],
      },
      {
        name: "Rendering & Data",
        items: [
          "SSR vs SSG vs ISR vs CSR — choosing the right strategy per page/component",
          "Server Components (default) vs Client Components ('use client' boundary)",
          "Streaming SSR: Suspense boundaries + loading.tsx for progressive HTML",
          "fetch() caching options: { cache: 'no-store' } for SSR, { next: { revalidate: 60 } } for ISR",
          "generateStaticParams: static generation for dynamic routes",
          "Partial Prerendering (PPR): static shell + dynamic holes",
        ],
      },
      {
        name: "Server Actions & API",
        items: [
          "Server Actions ('use server'): form mutations, progressive enhancement",
          "Route Handlers (app/api/route.ts): GET, POST, PATCH, DELETE",
          "Middleware: Edge runtime, request inspection, redirect/rewrite, auth guards",
          "useFormState / useFormStatus (React 19 hooks) with Server Actions",
          "Error handling patterns: try/catch in server actions, returning error objects",
        ],
      },
      {
        name: "Optimization",
        items: [
          "next/image: automatic WebP/AVIF, lazy loading, priority flag for LCP images",
          "next/font: zero layout shift, self-hosted Google Fonts, variable fonts",
          "next/dynamic: SSR-disable for heavy client components (charts, editors)",
          "Bundle analysis: @next/bundle-analyzer, tree-shaking verification",
          "Core Web Vitals: LCP, CLS, INP targets and Next.js-specific optimizations",
        ],
      },
    ],
  },
  {
    id: "tools",
    label: "Tooling & DX",
    icon: "⚙",
    accent: "#34d399",
    badge: "Advanced",
    sections: [
      {
        name: "Build Tools",
        items: [
          "Webpack: loaders, plugins, entry/output, code splitting (SplitChunksPlugin), tree shaking",
          "Vite: ESM-native dev server, HMR, Rollup for production, plugin ecosystem",
          "esbuild / SWC: Rust/Go-based transpilers — why they're 10-100× faster",
          "Module formats: ESM (import/export), CJS (require/module.exports), UMD, IIFE",
          "Source maps: types (cheap, eval, hidden), trade-offs for dev vs prod",
        ],
      },
      {
        name: "Testing",
        items: [
          "Vitest / Jest: describe, it, expect, beforeEach, mocking modules (vi.mock)",
          "React Testing Library philosophy: test behavior, not implementation",
          "RTL queries: getByRole (preferred), getByText, getByTestId; userEvent vs fireEvent",
          "Testing async: waitFor, findBy* queries, act() wrapping",
          "MSW (Mock Service Worker): intercept fetch/XHR at network level in tests + browser",
          "Playwright / Cypress: E2E user flows, visual regression, component testing",
        ],
      },
      {
        name: "TypeScript with React",
        items: [
          "Typing props: interface vs type alias, optional props, children: React.ReactNode",
          "Generic components: <T extends object> — flexible, reusable typing",
          "Event types: React.ChangeEvent<HTMLInputElement>, React.MouseEvent<HTMLButtonElement>",
          "Utility types: Partial, Required, Pick, Omit, Exclude, ReturnType, Parameters",
          "Discriminated unions for state machines; type guards (is, asserts)",
          "Declaration merging, module augmentation for library extensions",
        ],
      },
      {
        name: "Performance & Monitoring",
        items: [
          "Core Web Vitals: LCP (<2.5s), CLS (<0.1), INP (<200ms) — measurement & fixes",
          "Lighthouse CI: automated audits in CI pipeline",
          "Chrome DevTools: Performance tab, flame chart, Main thread analysis",
          "Bundle size: import cost, side-effect-free packages, dynamic imports",
          "Error monitoring: Sentry integration, source map upload, performance tracing",
        ],
      },
    ],
  },
];

const machineCoding = [
  {
    title: "Infinite Scroll Feed",
    difficulty: "Medium",
    time: "45 min",
    emoji: "♾️",
    tags: ["IntersectionObserver", "Pagination", "Loading States"],
    question: "Build a news feed that loads more articles as the user scrolls. Show a skeleton loader while fetching, an error state with retry, and an 'All caught up' message when no more data exists. Support pull-to-refresh.",
    concepts: ["IntersectionObserver API", "Cursor-based pagination", "Race condition prevention with AbortController", "Skeleton loading UX"],
    followUps: ["How would you virtualize this list for 10,000 items?", "How would you prevent duplicate requests on fast scroll?"],
  },
  {
    title: "Autocomplete / Typeahead Search",
    difficulty: "Medium",
    time: "40 min",
    emoji: "🔍",
    tags: ["Debounce", "Keyboard Navigation", "Accessibility"],
    question: "Build a search input that fetches suggestions from an API after 300ms debounce. Support keyboard navigation (↑↓ to move, Enter to select, Escape to close). Highlight the matched portion in each result. Handle empty states and errors.",
    concepts: ["Debounce implementation", "ARIA combobox pattern (role, aria-expanded, aria-activedescendant)", "Controlled keyboard navigation", "String matching & highlight"],
    followUps: ["How would you cache results to avoid refetching the same query?", "Add recent searches stored in localStorage."],
  },
  {
    title: "Drag & Drop Kanban Board",
    difficulty: "Hard",
    time: "60 min",
    emoji: "🗂️",
    tags: ["DnD", "useReducer", "Persistence"],
    question: "Build a Trello-style board with multiple columns. Cards should be draggable within and across columns. Support adding and deleting cards/columns. Persist state to localStorage. Animate card drops.",
    concepts: ["HTML5 Drag & Drop API (or dnd-kit)", "useReducer for complex state transitions", "Optimistic UI updates", "localStorage sync with useEffect"],
    followUps: ["How would you implement undo/redo?", "What changes if this were a collaborative real-time board?"],
  },
  {
    title: "File Upload with Progress & Preview",
    difficulty: "Medium",
    time: "45 min",
    emoji: "📤",
    tags: ["File API", "XHR / fetch", "Abort"],
    question: "Build a drag-and-drop file uploader supporting multiple files. Show upload progress per file using XMLHttpRequest. Allow cancelling individual uploads. Validate file type and size. Preview images before upload.",
    concepts: ["FileReader API for previews", "XHR.upload.onprogress for real progress", "AbortController for fetch / XHR.abort()", "Drag events: dragenter, dragover, dragleave, drop"],
    followUps: ["How would you handle very large files (chunked upload)?", "How would you support resumable uploads?"],
  },
  {
    title: "Custom Modal / Dialog System",
    difficulty: "Easy",
    time: "30 min",
    emoji: "🪟",
    tags: ["Portal", "Focus Trap", "Accessibility"],
    question: "Build a reusable Modal component rendered via React Portal. It must trap focus inside when open, close on Escape key or backdrop click, support stacked modals, and handle the scroll-lock on body. Should be fully accessible.",
    concepts: ["ReactDOM.createPortal()", "Focus trap: focusable elements query, tabindex management", "body overflow lock", "aria-modal, aria-labelledby, role=dialog"],
    followUps: ["How would you build a global imperative API: openModal(<Content />)?", "How would you animate mount/unmount?"],
  },
  {
    title: "Data Table (Sort, Filter, Pagination)",
    difficulty: "Hard",
    time: "60 min",
    emoji: "📊",
    tags: ["URL State", "Multi-sort", "Virtual Scroll"],
    question: "Build a data table for 1000 employee records. Support multi-column sorting, column-specific filtering, and pagination (page size selector). Sync all state (sort, filter, page) to URL query params so the view is shareable & bookmarkable.",
    concepts: ["Controlled sort state (column, direction)", "useSearchParams / nuqs for URL sync", "Derived/computed data with useMemo", "Debounced filter inputs"],
    followUps: ["How would you make columns resizable/reorderable?", "How would you virtualize rows for 100,000 records?"],
  },
  {
    title: "Real-time Chat UI",
    difficulty: "Hard",
    time: "60 min",
    emoji: "💬",
    tags: ["WebSocket", "Optimistic UI", "Virtualization"],
    question: "Build a chat interface connecting via WebSocket. Messages should appear instantly with optimistic updates (pending → sent → delivered states). Show a typing indicator. Virtualize the message list. Handle reconnection on disconnect.",
    concepts: ["WebSocket lifecycle (onopen, onmessage, onclose, onerror)", "Optimistic state with rollback on failure", "useRef for scroll-to-bottom without re-render", "Reconnection with exponential backoff"],
    followUps: ["How would you handle message ordering with out-of-order delivery?", "How would you add end-to-end encryption?"],
  },
  {
    title: "Toast / Notification System",
    difficulty: "Medium",
    time: "35 min",
    emoji: "🔔",
    tags: ["Context", "Queue", "Animation"],
    question: "Build a global toast notification system. Support success/error/warning/info variants, auto-dismiss with configurable duration, pause on hover, dismiss by click, and a maximum of 3 visible toasts with queue. Expose a useToast() hook.",
    concepts: ["Context + useReducer for global toast state", "setTimeout with useEffect cleanup", "CSS transition for slide-in/slide-out", "Imperative hook API pattern"],
    followUps: ["How would you make toasts accessible (aria-live regions)?", "How would you implement toast deduplication?"],
  },
  {
    title: "Star Rating Component",
    difficulty: "Easy",
    time: "25 min",
    emoji: "⭐",
    tags: ["Controlled/Uncontrolled", "Hover State", "A11y"],
    question: "Build a reusable star rating widget that supports both controlled and uncontrolled modes. Half-star precision option. Keyboard navigable (arrow keys). Read-only mode. Fully accessible with proper ARIA (role=radiogroup).",
    concepts: ["Controlled (value+onChange) vs uncontrolled (defaultValue+ref)", "Hover state tracking with onMouseEnter/Leave", "ARIA radiogroup + radio roles", "CSS clip-path for half-star fill"],
    followUps: ["How would you support fractional ratings (3.7 stars)?", "How would you write unit tests for keyboard navigation?"],
  },
  {
    title: "Dynamic Form Builder with Validation",
    difficulty: "Hard",
    time: "60 min",
    emoji: "📝",
    tags: ["React Hook Form", "Zod", "Dynamic Fields"],
    question: "Build a form driven by a JSON config (field type, label, validation rules, conditional visibility). Fields include text, select, checkbox, radio, repeatable field arrays. Validate with Zod schema on submit and show inline errors.",
    concepts: ["React Hook Form: register, Controller, useFieldArray", "Zod schema composition and custom refinements", "watch() for conditional field rendering", "Schema-driven UI pattern"],
    followUps: ["How would you persist partially-filled form state across refreshes?", "How would you support multi-step wizard forms?"],
  },
  {
    title: "Accordion / Tabs Component (Compound)",
    difficulty: "Easy",
    time: "30 min",
    emoji: "📑",
    tags: ["Compound Component", "Context", "Animation"],
    question: "Build Accordion and Tabs components using the Compound Component pattern. The API should feel like: <Tabs><Tabs.List><Tabs.Tab>...</Tabs.Tab></Tabs.List><Tabs.Panel>...</Tabs.Panel></Tabs>. Support controlled and uncontrolled modes, keyboard navigation, and animated panel transitions.",
    concepts: ["Compound component pattern with Context", "React.Children + cloneElement vs Context approach", "ARIA tabs/accordion keyboard pattern", "CSS height animation trick (max-height vs display:none)"],
    followUps: ["How would you make tabs lazy-render their panels?", "How would you add URL-hash syncing?"],
  },
  {
    title: "useDebounce / useThrottle Hook",
    difficulty: "Easy",
    time: "20 min",
    emoji: "⏱️",
    tags: ["Custom Hook", "Closures", "useRef"],
    question: "Implement useDebounce(value, delay) and useThrottle(value, limit) hooks from scratch without any library. Then build a search component demonstrating both. Explain the difference and when you'd choose each.",
    concepts: ["setTimeout / clearTimeout inside useEffect", "useRef to hold timer across renders without re-triggering effect", "Trailing vs leading execution", "Throttle with timestamp tracking"],
    followUps: ["How would you make the hook flush immediately on unmount?", "Implement a debounced callback version: useDebouncedCallback."],
  },
];

const diffMap = { Easy: { bg: "#14532d", text: "#4ade80", dot: "#22c55e" }, Medium: { bg: "#713f12", text: "#fbbf24", dot: "#f59e0b" }, Hard: { bg: "#7f1d1d", text: "#f87171", dot: "#ef4444" } };

export default function App() {
  const [tab, setTab] = useState("roadmap");
  const [activeId, setActiveId] = useState("html");
  const [openSections, setOpenSections] = useState({});
  const [openCard, setOpenCard] = useState(null);

  const active = roadmap.find(r => r.id === activeId);

  const toggleSection = (key) => setOpenSections(p => ({ ...p, [key]: !p[key] }));

  return (
    <div style={{ background: "#080b12", minHeight: "100vh", color: "#cbd5e1", fontFamily: "'IBM Plex Mono', 'Fira Code', monospace" }}>
      {/* Top Nav */}
      <div style={{ background: "#0c1120", borderBottom: "1px solid #1e293b", padding: "16px 20px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#e2e8f0" }}>Frontend Interview Prep</span>
            <span style={{ marginLeft: "auto", fontSize: 11, color: "#475569", background: "#1e293b", padding: "3px 10px", borderRadius: 20 }}>~4 YOE · React · Next.js (Contact: panditdeshant@gmail.com)</span>
          </div>
          <div style={{ display: "flex", gap: 2, background: "#0a0e1a", borderRadius: 10, padding: 4, width: "fit-content", border: "1px solid #1e293b" }}>
            {["roadmap", "machine"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: "7px 18px", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 12,
                fontWeight: 600, letterSpacing: 0.5, transition: "all 0.2s",
                background: tab === t ? "#1e293b" : "transparent",
                color: tab === t ? (t === "roadmap" ? "#22d3ee" : "#a78bfa") : "#475569",
              }}>
                {t === "roadmap" ? "▸ ROADMAP" : "▸ MACHINE CODING"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>

        {/* ── ROADMAP TAB ── */}
        {tab === "roadmap" && (
          <div style={{ display: "flex", gap: 18 }}>
            {/* Sidebar */}
            <div style={{ width: 160, flexShrink: 0 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#334155", marginBottom: 10, fontWeight: 700, textTransform: "uppercase" }}>Sections</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {roadmap.map(r => (
                  <button key={r.id} onClick={() => setActiveId(r.id)} style={{
                    padding: "10px 12px", borderRadius: 8, border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 9, textAlign: "left",
                    background: activeId === r.id ? "#0c1629" : "transparent",
                    borderLeft: activeId === r.id ? `2px solid ${r.accent}` : "2px solid transparent",
                    transition: "all 0.15s",
                  }}>
                    <span style={{ fontSize: 14, color: r.accent, opacity: activeId === r.id ? 1 : 0.5 }}>{r.icon}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: activeId === r.id ? "#e2e8f0" : "#64748b" }}>{r.label}</div>
                      <div style={{ fontSize: 9, marginTop: 1, color: r.accent, opacity: activeId === r.id ? 0.9 : 0.4, letterSpacing: 0.5 }}>{r.badge}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress hint */}
              <div style={{ marginTop: 24, padding: 12, background: "#0c1120", borderRadius: 8, border: "1px solid #1e293b" }}>
                <div style={{ fontSize: 10, letterSpacing: 1, color: "#334155", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>Levels</div>
                {[["Foundation", "#f97316"], ["Core", "#22d3ee"], ["Advanced", "#a78bfa"]].map(([l, c]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />
                    <span style={{ fontSize: 10, color: "#475569" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, paddingBottom: 14, borderBottom: `1px solid ${active.accent}22` }}>
                <span style={{ fontSize: 28, color: active.accent, filter: `drop-shadow(0 0 8px ${active.accent}66)` }}>{active.icon}</span>
                <div>
                  <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: active.accent, letterSpacing: -0.5 }}>{active.label}</h2>
                  <span style={{ fontSize: 10, letterSpacing: 1.5, color: active.accent, opacity: 0.6, textTransform: "uppercase" }}>{active.badge} Level</span>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 11, color: "#334155" }}>
                  {active.sections.length} sections · {active.sections.reduce((s, x) => s + x.items.length, 0)} topics
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {active.sections.map((sec, si) => {
                  const key = `${active.id}-${si}`;
                  const open = !!openSections[key];
                  return (
                    <div key={key} style={{ background: "#0c1120", border: `1px solid ${open ? active.accent + "40" : "#1e293b"}`, borderRadius: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
                      <button onClick={() => toggleSection(key)} style={{
                        width: "100%", padding: "13px 16px", background: "transparent", border: "none",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 4, height: 16, borderRadius: 2, background: open ? active.accent : "#1e293b", transition: "background 0.2s" }} />
                          <span style={{ fontSize: 13, fontWeight: 600, color: open ? "#e2e8f0" : "#94a3b8", textAlign: "left" }}>{sec.name}</span>
                          <span style={{ fontSize: 10, color: "#334155", background: "#0a0e1a", padding: "2px 8px", borderRadius: 20, border: "1px solid #1e293b" }}>{sec.items.length}</span>
                        </div>
                        <span style={{ fontSize: 14, color: "#334155", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                      </button>

                      {open && (
                        <div style={{ padding: "4px 16px 16px", borderTop: "1px solid #1e293b" }}>
                          {sec.items.map((item, ii) => (
                            <div key={ii} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: ii < sec.items.length - 1 ? "1px solid #0d1525" : "none" }}>
                              <span style={{ color: active.accent, fontSize: 10, marginTop: 3, flexShrink: 0, opacity: 0.7 }}>▸</span>
                              <span style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.7 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── MACHINE CODING TAB ── */}
        {tab === "machine" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#a78bfa", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>React Machine Coding Rounds</div>
              <p style={{ margin: 0, fontSize: 12, color: "#475569" }}>12 most commonly asked problems for 3–5 years experience level. Click any card to see the full problem.</p>
            </div>

            {/* Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {machineCoding.map((mc, i) => {
                const d = diffMap[mc.difficulty];
                const isOpen = openCard === i;
                return (
                  <div key={i} onClick={() => setOpenCard(isOpen ? null : i)} style={{
                    background: "#0c1120", border: `1px solid ${isOpen ? "#a78bfa44" : "#1e293b"}`,
                    borderRadius: 12, padding: "16px", cursor: "pointer", transition: "all 0.2s",
                    gridColumn: isOpen ? "1 / -1" : "auto",
                  }}
                    onMouseEnter={e => { if (!isOpen) e.currentTarget.style.borderColor = "#2e3a52"; }}
                    onMouseLeave={e => { if (!isOpen) e.currentTarget.style.borderColor = "#1e293b"; }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 22 }}>{mc.emoji}</span>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{mc.title}</div>
                          <div style={{ fontSize: 10, color: "#475569", marginTop: 2 }}>⏱ {mc.time}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: d.bg, color: d.text, flexShrink: 0 }}>
                        {mc.difficulty}
                      </span>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
                      {mc.tags.map((t, j) => (
                        <span key={j} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, background: "#0a0e1a", color: "#64748b", border: "1px solid #1e293b" }}>{t}</span>
                      ))}
                    </div>

                    {!isOpen && (
                      <p style={{ margin: 0, fontSize: 11, color: "#475569", lineHeight: 1.6 }}>{mc.question.substring(0, 90)}…</p>
                    )}

                    {isOpen && (
                      <div style={{ marginTop: 10, borderTop: "1px solid #1e293b", paddingTop: 14 }}>
                        <div style={{ marginBottom: 14 }}>
                          <div style={{ fontSize: 10, letterSpacing: 1.5, color: "#a78bfa", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Problem Statement</div>
                          <p style={{ margin: 0, fontSize: 12, color: "#94a3b8", lineHeight: 1.8, background: "#080b12", padding: 14, borderRadius: 8, border: "1px solid #1e293b" }}>{mc.question}</p>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                          <div>
                            <div style={{ fontSize: 10, letterSpacing: 1.5, color: "#22d3ee", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Key Concepts to Cover</div>
                            {mc.concepts.map((c, j) => (
                              <div key={j} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                                <span style={{ color: "#22d3ee", fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
                                <span style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.6 }}>{c}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div style={{ fontSize: 10, letterSpacing: 1.5, color: "#f97316", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Follow-up Questions</div>
                            {mc.followUps.map((f, j) => (
                              <div key={j} style={{ display: "flex", gap: 8, marginBottom: 9, alignItems: "flex-start" }}>
                                <span style={{ color: "#f97316", fontSize: 10, marginTop: 2, flexShrink: 0 }}>?</span>
                                <span style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.6, fontStyle: "italic" }}>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={{ marginTop: 12, textAlign: "right" }}>
                          <span style={{ fontSize: 11, color: "#334155" }}>▲ Click to collapse</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pro Tips */}
            <div style={{ marginTop: 24, background: "#0c1120", border: "1px solid #1e293b", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#eab308", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>⚡ Machine Coding Round Strategy</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  ["Clarify first", "Spend 2–3 min clarifying requirements, edge cases, and constraints before coding"],
                  ["Start with types/interface", "Define your data shapes and component API before implementation"],
                  ["Dummy data first", "Hardcode data to get UI right, then wire up API/state"],
                  ["Think aloud", "Narrate your decisions — interviewers want to hear your reasoning process"],
                  ["Handle edge cases", "Empty state, error state, loading state — show you think in production terms"],
                  ["Accessibility", "Mention aria attributes and keyboard navigation even if you don't implement all of it"],
                ].map(([title, desc], i) => (
                  <div key={i} style={{ padding: 12, background: "#080b12", borderRadius: 8, border: "1px solid #1e293b" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#eab308", marginBottom: 5 }}>{title}</div>
                    <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
