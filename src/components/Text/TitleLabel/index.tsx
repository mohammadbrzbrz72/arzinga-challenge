import Typography from "@mui/material/Typography";

interface TitleLabel {
  title: string;
  label: string | number;
}

export const TitleLabel = ({ title, label }: TitleLabel) => {
  return (
    <div className="flex justify-between items-center">
      <Typography gutterBottom variant="body1" style={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </div>
  );
};
