import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      winterColor: string
      backgroundColor: string
      text: string
    }
  }
}
