import { Chip } from "../Chip";

const DappyChip = () => <Chip bgColor="#036b76">dappy</Chip>;

const IcannChip = () => <Chip bgColor="#0067b1">icann</Chip>;

interface NetworkChipProps {
  domain: string;
}

export const NameSystemChip = ({ domain }: NetworkChipProps) =>
  /\.(d|gamma)$/.test(domain) ? <DappyChip /> : <IcannChip />;
