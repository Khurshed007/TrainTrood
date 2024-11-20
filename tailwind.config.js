
/** 
 * @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        ring: 'hsl(var(--ring))'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
// colors: {
//   border: "hsl(var(--border))",
//   input: "hsl(var(--input))",
//   ring: "hsl(var(--ring))",
//   background: "hsl(var(--background))",
//   foreground: "hsl(var(--foreground))",
//   primary: {
//     DEFAULT: "hsl(var(--primary))",
//     foreground: "hsl(var(--primary-foreground))",
//   },
//   secondary: {
//     DEFAULT: "hsl(var(--secondary))",
//     foreground: "hsl(var(--secondary-foreground))",
//   },
//   destructive: {
//     DEFAULT: "hsl(var(--destructive))",
//     foreground: "hsl(var(--destructive-foreground))",
//   },
//   muted: {
//     DEFAULT: "hsl(var(--muted))",
//     foreground: "hsl(var(--muted-foreground))",
//   },
//   accent: {
//     DEFAULT: "hsl(var(--accent))",
//     foreground: "hsl(var(--accent-foreground))",
//   },
//   popover: {
//     DEFAULT: "hsl(var(--popover))",
//     foreground: "hsl(var(--popover-foreground))",
//   },
//   card: {
//     DEFAULT: "hsl(var(--card))",
//     foreground: "hsl(var(--card-foreground))",
//   },
// },