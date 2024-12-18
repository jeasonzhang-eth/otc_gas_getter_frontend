import Link from "next/link"
import { turboIntegrations } from "@/data/turbo-integrations"
import { LuBook } from "react-icons/lu"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { PageSection } from "@/components/layout/page-section"
import { LightDarkImage } from "@/components/shared/light-dark-image"
import { GeneralInfo } from "@/integrations/otc/components/general-info"
import { ListAssetsToBorrow } from "@/integrations/otc/components/list-assets-to-borrow"
import { ListAssetsToSupply } from "@/integrations/otc/components/list-assets-to-supply"
import { ListBorrowedAssets } from "@/integrations/otc/components/list-borrowed-assets"
import { ListSuppliedAssets } from "@/integrations/aave/components/list-supplied-assets"
import {IsWalletConnected} from "@/components/shared/is-wallet-connected";
import {ERC20Deploy} from "@/actions/erc20/components/erc20-deploy";
import {Erc20SetTokenStorage} from "@/actions/erc20/components/erc20-set-token-storage";
import {Card, CardContent} from "@/components/ui/card";
import {ERC20Read} from "@/actions/erc20/components/erc20-read";
import {ERC20WriteMint} from "@/actions/erc20/components/erc20-write-mint";
import {ERC20WriteTransfer} from "@/actions/erc20/components/erc20-write-transfer";
import {IsWalletDisconnected} from "@/components/shared/is-wallet-disconnected";
import {WalletConnect} from "@/components/blockchain/wallet-connect";

export default function AavePage() {
  return (
    <div className="container relative mt-20">
      <PageHeader className="pb-8">
        {/*<LightDarkImage*/}
        {/*  LightImage={turboIntegrations.otc.imgDark}*/}
        {/*  DarkImage={turboIntegrations.otc.imgLight}*/}
        {/*  alt="otc Logo"*/}
        {/*  width={100}*/}
        {/*  height={100}*/}
        {/*/>*/}
        <PageHeaderHeading>OTCGasGetter</PageHeaderHeading>
        <PageHeaderDescription>
          Make ETH Transfer Affordable
        </PageHeaderDescription>
        {/*<PageHeaderCTA>*/}
        {/*  <Link*/}
        {/*    href={turboIntegrations.otc.url}*/}
        {/*    target="_blank"*/}
        {/*    rel="noreferrer noopener"*/}
        {/*    className={cn(buttonVariants({ variant: "outline" }))}*/}
        {/*  >*/}
        {/*    <LuBook className="mr-2 h-4 w-4" />*/}
        {/*    Documentation*/}
        {/*  </Link>*/}
        {/*</PageHeaderCTA>*/}
      </PageHeader>
      <PageSection className="flex w-full justify-center pb-8">
          <GeneralInfo />
          {/* <IsWalletConnected> */}
          {/*<div className="flex w-full max-w-screen-lg flex-col gap-y-8">*/}
          {/*  <ERC20Deploy />*/}
          {/*  <Erc20SetTokenStorage />*/}
          {/*  {token && (*/}
          {/*      <>*/}
          {/*        <Card>*/}
          {/*          <CardContent className="flex flex-col">*/}
          {/*          <span className="mb-4 text-lg">*/}
          {/*            Access the token page where you can update the url*/}
          {/*            parameters to select which ERC20 token to view*/}
          {/*          </span>*/}
          {/*            <Link*/}
          {/*                className={cn(*/}
          {/*                    buttonVariants({ variant: "emerald", size: "sm" })*/}
          {/*                )}*/}
          {/*                href={`/integration/erc20/1/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`}*/}
          {/*            >*/}
          {/*              View Token Page*/}
          {/*            </Link>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*        <ERC20Read address={token} />*/}
          {/*        <ERC20WriteMint address={token} />*/}
          {/*        <ERC20WriteTransfer address={token} />*/}
          {/*      </>*/}
          {/*  )}*/}
          {/*</div>*/}
          {/* </IsWalletConnected> */}
          <IsWalletDisconnected>
              <div className="flex items-center justify-center">
                  <WalletConnect />
              </div>
          </IsWalletDisconnected>
      </PageSection>
    </div>
  )
}
