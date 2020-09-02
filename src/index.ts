import { eventLoop } from './eventLoop'
import { asyncAwait } from './async'
import { promiseExample } from './promise'
import { observableExample } from './observable'

async function main() {
  eventLoop()
  await asyncAwait()
  await promiseExample()
  observableExample()
}

main()
