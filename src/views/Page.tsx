import styled from 'styled-components'
import { Box, Flex } from 'hydroswap-uikitv2'
import Footer from 'components/Menu/Footer'
import { PageMeta } from 'components/Layout/Page'
import { EXCHANGE_DOCS_URLS } from 'config/constants'

const StyledPage = styled.div<{ $removePadding: boolean; $noMinHeight }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ $removePadding }) => ($removePadding ? '0' : '16px')};
  padding-bottom: 0;
  min-height: ${({ $noMinHeight }) => ($noMinHeight ? 'initial' : '80vh')};
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ $removePadding }) => ($removePadding ? '0' : '12px')};
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: ${({ $removePadding }) => ($removePadding ? '0' : '32px')};
    padding-bottom: 0;
    min-height: ${({ $noMinHeight }) => ($noMinHeight ? 'initial' : '80vh')};
  }
`

const Page: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_DOCS_URLS,
  ...props
}) => {
  return (
    <>
      <PageMeta />
      <StyledPage $removePadding={removePadding} $noMinHeight={noMinHeight} {...props}>
        {children}
        <Flex flexGrow={1} />
        <Box display={['block', null, null, hideFooterOnDesktop ? 'none' : 'block']} width="100%">
          <Footer helpUrl={helpUrl} />
        </Box>
      </StyledPage>
    </>
  )
}

export default Page
