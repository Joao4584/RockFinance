import * as Styled from "./auth.style";

export function Auth() {
    return (
        <Styled.Page>
            <Styled.Card>
                <div className="banner-card">
                    <div className="card-image"></div>
                </div>
                <div className="login-card">Login</div>
            </Styled.Card>
        </Styled.Page>
    );
}
