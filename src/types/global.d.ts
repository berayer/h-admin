interface Window {
  $loadingBar: import('naive-ui').LoadingBarProviderInst
  $dialog: import('naive-ui').DialogProviderInst
  $message: import('naive-ui').MessageProviderInst
  $notification: import('naive-ui').NotificationProviderInst
  isLoading: boolean
}

interface GlobalMenu {
  id: number
  path: string
  label: string
  icon?: string
  children?: GlobalMenu[]
}
