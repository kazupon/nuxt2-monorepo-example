/**
 * NOTE:
 * `module1` の plugin で定義した `$hello` が何故か VSCode 上で型解決できないので
 * app2 側の plugins に型定義のみしたもの入れることで解決する
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Context } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $hello(message: string): string
  }
}
