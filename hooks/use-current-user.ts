import { useSession } from "next-auth/react"

export const useCUrrentUser = () => {
  
  const session = useSession();

  return session.data?.user
}