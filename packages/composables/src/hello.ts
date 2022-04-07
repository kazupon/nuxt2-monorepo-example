import { useContext, ref, isRef } from '@nuxtjs/composition-api'
import type { Ref } from '@nuxtjs/composition-api'

export function useHello(message: string | Ref<string>): Ref<string> {
  const { $hello } = useContext()
  return ref<string>($hello(isRef(message) ? message.value : message))
}
