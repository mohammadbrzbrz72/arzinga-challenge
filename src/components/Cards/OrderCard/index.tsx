import * as React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import Image from "next/image";

import { TitleLabel } from "@/components";

interface IProductCard {
  src: string;
  productId: number;
  price: string | number;
  productName: string;
}

export function OrderCard({
  src,
  price,
  productName,
  productId,
}: IProductCard) {
  return (
    <Card className="max-h-[340px] flex">
      <CardActionArea>
        <div className="relative w-full h-[600px]">
          <Image
            className="absolute left-0 top-0"
            src={src}
            alt="product picture"
            fill
          />
        </div>
      </CardActionArea>
      <CardContent className="flex flex-col justify-between">
        <div className="pt-16">
          <TitleLabel title="Product Category" label={productName} />
          <TitleLabel
            title="Product Name"
            label={productName + " " + productId}
          />
          <TitleLabel title="Price" label={"$" + String(price)} />
          <TitleLabel title="Product Id" label={productId} />
          <Typography gutterBottom variant="body1" style={{ fontWeight: 700 }}>
            Description:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Typography>
        </div>
        <CardActions className="flex items-center justify-end gap-5"></CardActions>
      </CardContent>
    </Card>
  );
}
