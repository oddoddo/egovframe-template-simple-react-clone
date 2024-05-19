import { setupWorker } from 'msw'
import { handlers } from './handlers'

// setupWorker 함수를 사용하여 worker를 생성합니다.
export const worker = setupWorker(...handlers)
