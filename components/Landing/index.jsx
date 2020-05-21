import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
    LandingBackground,
    PaddedCol,
    ResponsiveHeader2,
    ResponsiveParagraph,
    FullRow,
    LoginButton,
    VerticalCenterWrapper,
} from "./styles";

const URL = "https://cdn.pixabay.com/photo/2020/04/30/02/14/bali-5111131_1280.jpg";

const Landing = () => {
    return (
        <div>
            <LandingBackground className={"z-depth-5"} url={URL}>
                <FullRow>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <ResponsiveHeader2>Grow the community by spreading the message</ResponsiveHeader2>
                        <ResponsiveParagraph>and get kittens in the process</ResponsiveParagraph>
                    </PaddedCol>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <VerticalCenterWrapper>
                            <LoginButton size="lg" onClick={() => console.log('you are the besst!!!')}>
                                Join the movement{" "}
                                <span role="img" aria-label="rocket">
                                    🚀
                                </span>
                            </LoginButton>
                        </VerticalCenterWrapper>
                    </PaddedCol>
                </FullRow>
            </LandingBackground>

            <Container>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ultrices mi. Aliquam rutrum ante id
                felis laoreet, et porttitor orci pulvinar. Mauris ullamcorper sapien ex, in commodo nunc luctus eget.
                Aenean congue quis lacus non dapibus. Cras ligula ipsum, ullamcorper non volutpat vitae, tincidunt eget
                augue. Etiam volutpat porta posuere. Phasellus venenatis urna pulvinar, dignissim justo in, auctor nunc.
                Phasellus ac urna aliquet, maximus tortor id, eleifend ligula. Donec pretium ultrices condimentum. Nunc
                nulla purus, sodales et magna nec, imperdiet tempor quam. Pellentesque vitae dolor quis dui tristique
                consequat vitae eu purus. Vivamus hendrerit nunc eget urna pulvinar consequat. Quisque nibh purus,
                elementum id pretium non, ullamcorper at orci. Pellentesque sodales velit non orci tincidunt, vitae
                dictum elit placerat. Cras eget luctus dui. Aliquam iaculis ipsum vitae urna tempus pellentesque.
                Vestibulum mollis lorem mauris, sed volutpat magna tristique nec. Vestibulum cursus libero nec enim
                porta aliquet. Fusce vitae tempor nisl. Quisque velit augue, molestie vitae sollicitudin ac, ultricies
                nec quam. Vestibulum suscipit et sapien molestie consectetur. Nullam elit metus, scelerisque eget nibh
                quis, hendrerit feugiat libero. Ut nisi ligula, euismod eu mi ut, finibus auctor lacus. Mauris
                pellentesque feugiat lectus, in imperdiet nunc tincidunt id. Aliquam eu blandit dui, et dictum enim.
                Donec nec ligula pretium, mollis sem vitae, pharetra sapien. Praesent congue egestas risus id maximus.
                Nullam tincidunt rutrum ex, ac aliquam sapien tempus malesuada. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Ut dapibus ante non eleifend varius. Pellentesque
                volutpat maximus ultrices. Quisque nec sem nec turpis malesuada dapibus sit amet vitae nisi. Morbi
                pharetra enim dui, eget dapibus orci porttitor quis. Duis placerat venenatis porttitor. Suspendisse
                luctus eu orci in placerat. Fusce convallis pretium elementum. Phasellus egestas, urna et blandit
                luctus, sem eros tempus dui, a lobortis velit enim sit amet augue. Quisque cursus sed libero ac aliquet.
                Vestibulum et odio a eros convallis commodo. Pellentesque neque est, varius vitae interdum eget,
                elementum et ligula. Nam facilisis orci arcu, eget sollicitudin massa ultrices eu. Pellentesque pretium
                efficitur ante, id aliquet nisi luctus ac. Phasellus vitae urna non metus auctor maximus. Aliquam luctus
                eu ligula eget tempor. Curabitur commodo sagittis rutrum. Sed auctor ex nec ante ornare, ac eleifend mi
                suscipit. Fusce quis ullamcorper nunc. Proin eget egestas sapien. Suspendisse ut nisl nec dui ultricies
                fermentum tempor nec libero. Nulla condimentum placerat lectus. Sed enim felis, luctus at massa nec,
                eleifend consectetur quam. Curabitur quis ex a ex facilisis sollicitudin. Sed luctus viverra semper.
                Etiam consectetur, lorem vel consequat eleifend, magna lectus porttitor diam, sit amet condimentum erat
                orci ut risus. Cras eget gravida elit.
            </Container>
        </div>
    );
};

export default Landing;
