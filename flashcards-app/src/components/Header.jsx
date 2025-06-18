const Header = ({numberOfCards}) => {
    return (
        <header className="header">
            <h1>BNY Behavioral Interview Flashcards</h1>
            <p>Flip, reflect, and master {numberOfCards} of BNY’s core interview pillars: from company knowledge to moral judgment.</p>
        </header>
    );
}

export default Header;