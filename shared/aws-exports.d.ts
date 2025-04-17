declare const awsmobile: {
    aws_project_region: string;
    aws_cognito_identity_pool_id?: string;
    aws_cognito_region?: string;
    aws_user_pools_id?: string;
    aws_user_pools_web_client_id?: string;
    oauth?: Record<string, any>;
    aws_cognito_username_attributes?: string[];
    aws_cognito_social_providers?: string[];
    aws_cognito_signup_attributes?: string[];
    aws_cognito_mfa_configuration?: string;
    aws_cognito_mfa_types?: string[];
    aws_cognito_password_protection_settings?: {
      passwordPolicyMinLength?: number;
      passwordPolicyCharacters?: string[];
    };
    aws_cognito_verification_mechanisms?: string[];
    [key: string]: any; // Allow additional properties
  };
  
  export default awsmobile;