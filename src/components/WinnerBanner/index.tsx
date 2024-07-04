type WinnerBannerProps = {
  winner: string;
};

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  return <h2>And the winner is ... {winner}</h2>;
};

export default WinnerBanner;
