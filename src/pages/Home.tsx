// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import Container from '@/components/Container'
import { inlineFlexAlignCenter } from '@/styles'
import { LogoWebpack, LogoReact, LogoTS, LogoStyledComp, LogoPolished } from '@/assets'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <Container>
          <div
            css={`
              text-align: center;
            `}
          >
            <h1>
              <span
                css={`
                  ${inlineFlexAlignCenter} gap: 0.3em;
                `}
              >
                <LogoWebpack /> Webpack Boilerplate
              </span>
            </h1>
            <h2>
              <span
                css={`
                  ${inlineFlexAlignCenter} gap: 0.3em;
                  flex-wrap: wrap;
                `}
              >
                <LogoReact /> React <LogoTS /> TypeScript +<LogoStyledComp /> Styled Components +{' '}
                <LogoPolished /> Polished
              </span>
            </h2>
          </div>
        </Container>
      </Layout>
    </ContextProviders>
  )
}

export default Home
