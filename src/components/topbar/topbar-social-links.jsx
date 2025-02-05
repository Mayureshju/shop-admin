
// MUI ICON COMPONENTS
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

// GLOBAL CUSTOM COMPONENT
import FlexBox from "components/flex-box/flex-box";


// ==============================================================


// ==============================================================

export default function TopbarSocialLinks({
  links
}) {
  const {
    twitter,
    facebook,
    instagram
  } = links;
  return <FlexBox alignItems="center" gap={1.5}>
      {twitter ? <LinkItem Icon={Twitter} url={twitter} /> : null}
      {facebook ? <LinkItem Icon={Facebook} url={facebook} /> : null}
      {instagram ? <LinkItem Icon={Instagram} url={instagram} /> : null}
    </FlexBox>;
}
function LinkItem({
  Icon,
  url
}) {
  return <a href={url} target="_blank">
      <Icon sx={{
      fontSize: 16
    }} />
    </a>;
}