/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/jsx-key */
import React, { FC } from 'react';
import Head from 'next/head';
import Footer from '../common/footer';
// // import ReactPixel from 'react-facebook-pixel';
// const options = {
//     autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
//     debug: false, // enable logs
// };

// import LinkedInTag from 'react-linkedin-insight';
// import ReactGA from 'react-ga';


interface PageLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    metaUrl?: string;
    extraHeaderElements?: object;
    children: React.ReactNode;
    hideBanner?: boolean;
    hideLinks?: boolean;
    customDemoLink?: string;
    customLogoLink?: string;
    hideFooterLinks?: boolean;
}

const PageLayout: FC<PageLayoutProps> = ({
    title,
    description,
    keywords,
    metaUrl,
    extraHeaderElements,
    hideBanner,
    hideLinks,
    customDemoLink,
    hideFooterLinks,
    customLogoLink,
    children,
    ...props
}) => {
    // React.useEffect(() => {
    //     const ReactPixel = require('react-facebook-pixel');
    //     ReactPixel.default.init('431417551712628', undefined, options);
    //     ReactPixel.default.pageView(); // For tracking page view

    //     //   // const disabled = !user.allowsThirdPartyCookies();
    //     //   LinkedInTag.init('2826916', 'dc', false);
    //     //   LinkedInTag.track('2826916');

    //     //   ReactGA.initialize(`G-ZQLHXP754M`);
    //     //   ReactGA.initialize(`UA-185626778-1`);
    //     //   ReactGA.initialize(`AW-361743888`);
    //     //   ReactGA.pageview(window.location.pathname + window.location.search);
    // }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                {description && <meta name='description' content={description} />}
            </Head>
            {/* <Header
                hideLinks={hideLinks}
                customLogoLink={customLogoLink}
                customDemoLink={customDemoLink}
            /> */}
            <div className={``}>
                <main>{children}</main>
                <Footer />
                {/* {!hideBanner && (
                    <Banner
                        contentMobile='Forbes publishes its 30 under 30 list featuring Data Sutram co-founders'
                        contentDesktop='Forbes publishes its 30 under 30 list featuring Data Sutram co-founders'
                        href='https://www.forbes.com/profile/data-sutram/?list=30under30-asia-enterprise-technology&sh=28441be91b5f'
                    />
                )} */}
            </div>
        </>
    );
};

PageLayout.defaultProps = {
    title: 'MotoFixer',
    description: "motofixer"
};

export default PageLayout;