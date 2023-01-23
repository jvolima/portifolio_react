import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      background: string
      border: string
      title: string
      text: string
    }
  }
}
