import NextImage from "next/image";
import { Image as NextUIImage, ImageProps as NextUIImageProps } from "@nextui-org/image";

export default function Image(props: NextUIImageProps) {
  return <NextUIImage as={NextImage} {...props}  />
}
