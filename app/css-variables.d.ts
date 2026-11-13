import "react";

// Lets style={{ "--font-size": "2rem" }} type-check for any CSS custom property.
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
