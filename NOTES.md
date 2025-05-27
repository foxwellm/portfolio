
---

### 🟢 `ComponentA`

```tsx
const ComponentA = dynamic(() => import('../components/A'))
```

#### ✅ Use Case:
- **Splits into a separate client bundle**, but **loads immediately** with the page.
- Good for large, client-only components that you want to **defer out of the main JS bundle** but **always render**.

#### 🔧 Example:
- A heavy chart library, animation engine, or UI framework component that’s visible on first render.
- e.g. `<HeroCanvas />`, `<ClientOnlyNavbar />`

---

### 🟡 `ComponentB`

```tsx
const ComponentB = dynamic(() => import('../components/B'))
```

Rendered conditionally:

```tsx
{showMore && <ComponentB />}
```


#### ✅ Use Case:
- Only loaded when `showMore === true` — i.e., **on demand**
- Helps avoid shipping unnecessary JS until the user triggers an interaction

#### 🔧 Example:
- FAQ section expanded by user
- Modals, sidebars, dropdowns
- Optional charts or graphs

---

### 🔴 `ComponentC` (with `ssr: false`)

```tsx
const ComponentC = dynamic(() => import('../components/C'), { ssr: false })
```

#### ✅ Use Case:
- Skips **Server-Side Rendering** entirely
- Useful when the component:
  - Uses `window`, `document`, or browser-only APIs
  - Relies on layout measurements
  - Integrates with 3rd-party libraries that break SSR

#### 🔧 Example:
- `react-chartjs`, `three.js`, `mapbox-gl`, or animation libraries
- Portals, Lottie animations, or anything that won’t work in SSR

#### ⚠️ Caveat:
- Not rendered at all on the server, so there will be a **hydration delay**
- Don't use this for critical above-the-fold content

---

### Summary Table

| Component   | Loaded When            | SSR | Best For                                               |
|-------------|------------------------|-----|--------------------------------------------------------|
| `ComponentA` | On initial render       | ✅   | Always-visible, large client component                |
| `ComponentB` | Conditionally (on demand) | ✅   | Optional UI (e.g. modals, hidden sections)            |
| `ComponentC` | On client only         | ❌   | Browser-only features, animation libs, `window` usage |

---
