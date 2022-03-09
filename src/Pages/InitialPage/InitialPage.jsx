import React from 'react';
import {
    ContainerBox,
    Box,
    ContainerImage,
    Image,
    ContainerTitle,
    Title,
    ContainerParagraph,
    Subtitle
} from './InitialPage.style';

import qrCode from '../../images/image-qr-code.png'

export function InitialPage() {
    return (
        <>
            <ContainerBox>
                <Box>
                    <ContainerImage>
                        <Image alt="" src={qrCode} />
                    </ContainerImage>
                    
                    <ContainerTitle>
                        <Title>
                            Improve your front-end skills by building projects
                        </Title>
                    </ContainerTitle>

                    <ContainerParagraph>
                        <Subtitle>
                            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                        </Subtitle>
                    </ContainerParagraph>
                </Box>
            </ContainerBox>
        </>
    );
}