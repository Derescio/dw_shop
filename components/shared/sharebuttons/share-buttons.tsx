'use client'


import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';



const ShareButtons = ({ product }: { product: any }) => {

    const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.slug}`;

    return (
        <>
            <div className="flex flex-col items-center">
                <h3 className="text-md text center pt-2">Don`t wish. Hint instead.</h3>
                <div className="flex gap-3 justify-center pb-5">
                    <FacebookShareButton url={shareUrl} hashtag={product.name}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={product.name} hashtags={[`${product.category}`, `GreatGift`]}>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareUrl} title={product.name} separator=":: ">
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <EmailShareButton url={shareUrl} subject={product.name} body="Check out this product!">
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                </div>
            </div>
        </>
    );
}

export default ShareButtons;