import {useEffect} from 'react'

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title =`You have clicked ${count}`
  }, [count])
}

export default useDocumentTitle
