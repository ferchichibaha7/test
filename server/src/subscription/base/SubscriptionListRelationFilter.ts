/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubscriptionWhereInput } from "./SubscriptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SubscriptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereInput)
  @IsOptional()
  @Field(() => SubscriptionWhereInput, {
    nullable: true,
  })
  every?: SubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereInput)
  @IsOptional()
  @Field(() => SubscriptionWhereInput, {
    nullable: true,
  })
  some?: SubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereInput)
  @IsOptional()
  @Field(() => SubscriptionWhereInput, {
    nullable: true,
  })
  none?: SubscriptionWhereInput;
}
export { SubscriptionListRelationFilter };
