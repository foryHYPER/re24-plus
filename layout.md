# Standard Section Structure

This document outlines the recommended standard structure for creating new sections within the application to ensure consistency in layout, padding, and responsiveness.

## Recommended Structure (JSX/TSX)

```tsx
import React from 'react';
// Import other necessary components like Image, Link, etc.

export default function SectionName() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 /* Add background classes here, e.g., bg-white, bg-gray-50, bg-gradient-to-b ... */">
      {/* Optional: Background decorative elements (use absolute positioning) */}
      {/* <div className="absolute top-0 left-0 ..."></div> */}
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative /* Add relative if content needs z-index above background elements */">
        
        {/* Optional: Section Header Block */}
        <div className="text-center mb-12 md:mb-16">
          {/* Optional: Subtitle */}
          {/* <span className="section-subtitle">SECTION SUBTITLE</span> */}
          
          {/* Section Heading (Uses global h2 styles) */}
          <h2 className="/* Add text color override if needed, e.g., text-white, text-gray-900 */">
            <span className="block">Main Heading Line 1</span>
            {/* Optional: <span className="block">Main Heading Line 2</span> */}
          </h2>
          
          {/* Optional: Description Paragraph */}
          {/* <p className="body-text max-w-3xl mx-auto /* Add text color override if needed */"> */}
          {/*   Section description goes here...
          {/* </p> */}
        </div>

        {/* Main Content Area */}
        <div>
          {/* 
            Section-specific content layout goes here. 
            This could be a grid, flexbox, single column, etc.
            Example: <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">...</div>
          */}
        </div>

      </div>
    </section>
  );
}
```

## Key Principles:

1.  **`<section>` Tag**: 
    *   The outermost element.
    *   Handles **vertical padding** (`py-...`).
    *   Handles the **background** (color, gradient, image).
    *   Should have `relative` positioning if it contains absolutely positioned decorative elements.
2.  **Container `div`**: 
    *   Immediately inside the `<section>`.
    *   Uses `container mx-auto max-w-7xl` for centered content with a maximum width.
    *   Handles **horizontal padding** (`px-...`).
    *   May need `relative` if its content needs to stack above background elements defined in the parent section.
3.  **Header Block (Optional)**:
    *   Typically uses `text-center` and `mb-12 md:mb-16`.
    *   Use `<span className="section-subtitle">` for the uppercase green subtitle.
    *   `<h2>` automatically gets global styles. Add color class overrides (`text-white`, `text-gray-900`, etc.) as needed per section background.
    *   Use `<p className="body-text">` for the description below the heading. Often useful to add `max-w-3xl mx-auto` to this paragraph for readability. Add color overrides if needed.
4.  **Main Content Area**: 
    *   This is where the unique layout (grids, flex containers, cards, images, etc.) for each section resides.
    *   Structure inside this area will vary significantly between sections.
5.  **Global Classes**: Utilize `.section-subtitle` and `.body-text` where appropriate within the header or content.

By following this structure, you can ensure a more consistent look and feel across all sections of your website.
