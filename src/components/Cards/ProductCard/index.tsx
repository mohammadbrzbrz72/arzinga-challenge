import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";

interface IProductCard {
  src: string;
  title: string;
  onClick: () => void;
  onCancel: () => void;
  isOrder: boolean;
}

export function ProductCard({
  src,
  title,
  onClick,
  onCancel,
  isOrder,
}: IProductCard) {
  return (
    <Card className="max-h-[390px] pb-1">
      <CardActionArea>
        <div className="relative w-full h-[140px]">
          <Image
            className="absolute left-0 top-0"
            src={src}
            alt="product picture"
            fill
          />
        </div>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Typography>
      </CardContent>
      <CardActions className="flex items-center justify-between">
        <Typography variant="body2" color="text.secondary">
          Price: $12.5
        </Typography>

        <Button
          variant="contained"
          size="small"
          color={isOrder ? "error" : "primary"}
          onClick={isOrder ? onCancel : onClick}
        >
          {isOrder ? "Cancel" : "Buy"}
        </Button>
      </CardActions>
    </Card>
  );
}
