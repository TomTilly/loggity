// @mixin for-phone-only
//   @media (max-width: 599px)
//     @content

// @mixin for-tablet-portrait-up
//   @media (min-width: 600px)
//     @content

// @mixin for-tablet-landscape-up
//   @media (min-width: 900px)
//     @content

// @mixin for-desktop-up
//   @media (min-width: 1200px) 
//     @content

// @mixin for-big-desktop-up
//   @media (min-width: 1800px)
//     @content

const breakpoints = {
  phoneOnly: '(max-width: 599px)',
  tabletPortraitUp: '(min-width: 600px)',
  tabletLandscapeUp: '(min-width: 900px)',
  desktopUp: '(min-width: 1200px)',
  bigDesktopUp: '(min-width: 1800px)'
}

export default breakpoints;