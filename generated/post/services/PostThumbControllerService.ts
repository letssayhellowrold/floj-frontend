/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from "../models/BaseResponse_boolean_";
import type { BaseResponse_int_ } from "../models/BaseResponse_int_";
import type { PostThumbAddRequest } from "../models/PostThumbAddRequest";
import type { PostThumbCheckRequest } from "../models/PostThumbCheckRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class PostThumbControllerService {
  /**
   * doThumb
   * @param postThumbAddRequest postThumbAddRequest
   * @returns BaseResponse_int_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static doThumbUsingPost(
    postThumbAddRequest: PostThumbAddRequest
  ): CancelablePromise<BaseResponse_int_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/post_thumb/",
      body: postThumbAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
  /**
   * checkHasThumbed
   * @param postThumbCheckRequest postThumbCheckRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static checkHasThumbedUsingPost(
    postThumbCheckRequest: PostThumbCheckRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/post_thumb/check_has_thumbed",
      body: postThumbCheckRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
