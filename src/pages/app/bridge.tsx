import React from "react"
import { Center, Flex } from "@chakra-ui/react"
import { useGraphQLQuery } from "../../graphql/useGraphQLQuery"
import Link from 'next/link'
import {
  WalletDocument,
  WalletQuery,
} from "../../../generated/graphql"
import { Logout } from "../../components/Logout"
import AppLayout from "../../components/AppLayout"
import { useAuthContext } from "../../hooks/useAuthContext"
import SwapBridgeUI from "./swapbridgeui"

const BridgePage = () => {
  const { session, isLoading } = useAuthContext()

  const userId = session?.userId
  const { wallet, fetching: walletFetching } = useGraphQLQuery<WalletQuery>({
    query: WalletDocument,
    pause: isLoading,
  })

  const fetching = walletFetching || isLoading
  return (
    <Link href="/app/bridge">
    <AppLayout title="NFT Bridge | Flow Beats ">
      <Flex
        gap="10"
        textAlign="center"
        maxW={"1050px"}
        margin={{ base: "1rem", md: "40px auto" }}
        direction="column"
        // add inline styles to the Flex component
        backgroundColor="black"
        padding="2rem"
        borderRadius="0.5rem"
      >
        <SwapBridgeUI/>
      </Flex>
    </AppLayout></Link>
  )
}

export default BridgePage