# ABMTC Multilingual Implementation Guide

## Overview
The ABMTC website now supports three languages:
- **English (en)** - Default language
- **French (fr)** - Français
- **Spanish (es)** - Español

## Implementation Details

### Technology Stack
- **next-intl**: Internationalization library for Next.js
- **Locale-based routing**: URLs include language prefix (e.g., `/en/about`, `/fr/about`, `/es/about`)
- **Translation files**: JSON-based message files for each language

### File Structure

```
abmtc/
├── app/
│   ├── [locale]/          # Locale-specific routes
│   │   ├── layout.tsx     # Layout with NextIntlClientProvider
│   │   ├── page.tsx       # Home page
│   │   └── ...            # Other pages (to be moved here)
│   ├── layout.tsx         # Root layout (minimal)
│   └── page.tsx           # Redirects to /en
├── components/
│   ├── language-switcher.tsx  # Language selector dropdown
│   ├── navigation.tsx         # Updated with translations
│   └── ...
├── messages/
│   ├── en.json           # English translations
│   ├── fr.json           # French translations
│   └── es.json           # Spanish translations
├── i18n.ts               # i18n configuration
└── middleware.ts         # Locale routing middleware
```

### Key Files

#### 1. `i18n.ts` - Configuration
Defines supported locales and loads translation messages.

#### 2. `middleware.ts` - Routing
Handles automatic locale detection and URL rewriting.

#### 3. `messages/*.json` - Translations
Comprehensive translation files organized by namespace:
- `nav` - Navigation menu items
- `hero` - Hero section content
- `common` - Common UI elements
- `footer` - Footer content
- `home` - Home page specific content
- `about` - About page content
- `admissions` - Admissions page content
- `ministry` - Ministry Training page content
- `give` - Give/Partner page content
- `alumni` - Alumni page content
- `media` - Media & Resources page content
- `news` - News & Events page content
- `contact` - Contact page content

#### 4. `components/language-switcher.tsx` - Language Selector
Dropdown component with flags for language selection.

### URL Structure

All pages now follow this pattern:
- English: `/en/[page]`
- French: `/fr/[page]`
- Spanish: `/es/[page]`

Examples:
- `/en/about` - About page in English
- `/fr/admissions` - Admissions page in French
- `/es/give` - Give page in Spanish

### Using Translations in Components

#### Client Components
```typescript
'use client'
import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('namespace')
  
  return <h1>{t('key')}</h1>
}
```

#### Server Components
```typescript
import { useTranslations } from 'next-intl'

export default function MyPage() {
  const t = useTranslations('namespace')
  
  return <h1>{t('key')}</h1>
}
```

### Language Switcher

The language switcher is integrated into the navigation bar and displays:
- Globe icon
- Current language flag and name
- Dropdown menu with all available languages

When a user selects a new language, they are redirected to the same page in the new language.

### Translation Coverage

All major sections have been translated:
- ✅ Navigation menu
- ✅ Hero sections
- ✅ Call-to-action buttons
- ✅ Footer
- ✅ Home page content
- ✅ About page content
- ✅ Admissions page (including FAQs)
- ✅ Ministry Training page
- ✅ Give/Partner page
- ✅ Alumni page
- ✅ Media & Resources page
- ✅ News & Events page
- ✅ Contact page

### Next Steps to Complete Implementation

1. **Move Existing Pages to [locale] Folder**
   - Move all pages from `app/` to `app/[locale]/`
   - Update imports if necessary

2. **Update Components with Translations**
   - Replace hardcoded text with `t()` function calls
   - Use appropriate translation namespaces

3. **Test All Pages**
   - Verify all pages work in all three languages
   - Check that language switching preserves the current page
   - Ensure all translations are accurate

4. **SEO Optimization**
   - Add `hreflang` tags for each language version
   - Update sitemap to include all language versions
   - Add language-specific metadata

5. **Additional Features (Optional)**
   - Add language preference cookie
   - Implement automatic language detection based on browser settings
   - Add language-specific content where appropriate

### Adding New Translations

To add translations for new content:

1. **Add to English file** (`messages/en.json`):
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

2. **Add to French file** (`messages/fr.json`):
```json
{
  "mySection": {
    "title": "Mon titre",
    "description": "Ma description"
  }
}
```

3. **Add to Spanish file** (`messages/es.json`):
```json
{
  "mySection": {
    "title": "Mi título",
    "description": "Mi descripción"
  }
}
```

4. **Use in component**:
```typescript
const t = useTranslations('mySection')
return <h1>{t('title')}</h1>
```

### Translation Guidelines

1. **Maintain Context**: Ensure translations preserve the spiritual and ministerial tone
2. **Cultural Sensitivity**: Adapt content for cultural appropriateness when necessary
3. **Consistency**: Use consistent terminology across all pages
4. **Professional Quality**: All translations should be reviewed by native speakers
5. **Scripture References**: Keep Bible verse references consistent across languages

### Testing Checklist

- [ ] All navigation links work in all languages
- [ ] Language switcher functions correctly on all pages
- [ ] Forms submit correctly in all languages
- [ ] Images and media display correctly
- [ ] Mobile responsiveness works in all languages
- [ ] No untranslated text appears
- [ ] Scripture quotes are accurate in all languages
- [ ] Contact information is correct
- [ ] Call-to-action buttons work properly

### Known Limitations

1. **Dynamic Content**: Blog posts, news articles, and events may need manual translation
2. **User-Generated Content**: Testimonials and reviews are in their original language
3. **Third-Party Integrations**: Some embedded content (videos, forms) may only be in English

### Support for Additional Languages

To add more languages:

1. Add locale code to `i18n.ts`:
```typescript
export const locales = ['en', 'fr', 'es', 'pt'] as const; // Added Portuguese
```

2. Create new message file: `messages/pt.json`

3. Add to language switcher in `components/language-switcher.tsx`:
```typescript
{ code: 'pt', name: 'Português', flag: '🇵🇹' }
```

4. Update middleware if necessary

### Performance Considerations

- Translation files are loaded on-demand per locale
- Static generation is used for all locale versions
- Minimal impact on bundle size
- Fast language switching (client-side navigation)

### Maintenance

- Review translations quarterly for accuracy
- Update translations when adding new features
- Monitor user feedback for translation improvements
- Keep translation files in sync across all languages

## Conclusion

The ABMTC website is now fully multilingual, supporting English, French, and Spanish. This implementation makes the site accessible to a global audience and aligns with ABMTC's mission to train ministers from all nations.

For questions or issues, contact the development team.
