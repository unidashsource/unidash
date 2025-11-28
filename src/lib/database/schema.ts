export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          role: 'student' | 'university_admin' | 'school_counselor' | 'super_admin' | 'parent'
          full_name: string | null
          phone_number: string | null
          avatar_url: string | null
          is_verified: boolean
          created_at: string
        }
        Insert: {
          id: string
          email?: string | null
          role?: 'student' | 'university_admin' | 'school_counselor' | 'super_admin' | 'parent'
          full_name?: string | null
          phone_number?: string | null
          avatar_url?: string | null
          is_verified?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          role?: 'student' | 'university_admin' | 'school_counselor' | 'super_admin' | 'parent'
          full_name?: string | null
          phone_number?: string | null
          avatar_url?: string | null
          is_verified?: boolean
          created_at?: string
        }
      }
      universities: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          logo_url: string | null
          banner_url: string | null
          brand_color: string | null
          website_url: string | null
          support_email: string | null
          support_phone: string | null
          address_line1: string | null
          address_city: string | null
          address_state: string | null
          address_pincode: string | null
          is_active: boolean
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          logo_url?: string | null
          banner_url?: string | null
          brand_color?: string | null
          website_url?: string | null
          support_email?: string | null
          support_phone?: string | null
          address_line1?: string | null
          address_city?: string | null
          address_state?: string | null
          address_pincode?: string | null
          is_active?: boolean
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          logo_url?: string | null
          banner_url?: string | null
          brand_color?: string | null
          website_url?: string | null
          support_email?: string | null
          support_phone?: string | null
          address_line1?: string | null
          address_city?: string | null
          address_state?: string | null
          address_pincode?: string | null
          is_active?: boolean
        }
      }
      student_personal: {
        Row: {
          user_id: string
          dob: string | null
          gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say' | null
          social_category: 'General' | 'SC' | 'ST' | 'OBC-NCL' | 'EWS' | null
          nationality: string | null
          aadhar_number: string | null
          address_permanent: string | null
          address_correspondence: string | null
          is_financial_aid_seeker: boolean
          updated_at: string
        }
        Insert: {
          user_id: string
          dob?: string | null
          gender?: 'Male' | 'Female' | 'Other' | 'Prefer not to say' | null
          social_category?: 'General' | 'SC' | 'ST' | 'OBC-NCL' | 'EWS' | null
          nationality?: string | null
          aadhar_number?: string | null
          address_permanent?: string | null
          address_correspondence?: string | null
          is_financial_aid_seeker?: boolean
          updated_at?: string
        }
        Update: {
          user_id?: string
          dob?: string | null
          gender?: 'Male' | 'Female' | 'Other' | 'Prefer not to say' | null
          social_category?: 'General' | 'SC' | 'ST' | 'OBC-NCL' | 'EWS' | null
          nationality?: string | null
          aadhar_number?: string | null
          address_permanent?: string | null
          address_correspondence?: string | null
          is_financial_aid_seeker?: boolean
          updated_at?: string
        }
      }
      student_education: {
        Row: {
          id: string
          user_id: string
          institution_name: string
          school_id: string | null
          level: 'Class 10' | 'Class 12' | 'Undergrad' | 'Diploma' | null
          board: string | null
          status: 'Completed' | 'Pursuing' | null
          completion_year: number | null
          marking_scheme: 'Percentage' | 'CGPA_10' | 'CGPA_4' | 'IB_Points' | null
          score_obtained: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          institution_name: string
          school_id?: string | null
          level?: 'Class 10' | 'Class 12' | 'Undergrad' | 'Diploma' | null
          board?: string | null
          status?: 'Completed' | 'Pursuing' | null
          completion_year?: number | null
          marking_scheme?: 'Percentage' | 'CGPA_10' | 'CGPA_4' | 'IB_Points' | null
          score_obtained?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          institution_name?: string
          school_id?: string | null
          level?: 'Class 10' | 'Class 12' | 'Undergrad' | 'Diploma' | null
          board?: string | null
          status?: 'Completed' | 'Pursuing' | null
          completion_year?: number | null
          marking_scheme?: 'Percentage' | 'CGPA_10' | 'CGPA_4' | 'IB_Points' | null
          score_obtained?: number | null
          created_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          student_id: string
          university_id: string
          program_id: string
          cycle_id: string
          status: 'draft' | 'payment_pending' | 'submitted' | 'under_review' | 'interview_scheduled' | 'waitlisted' | 'offer_released' | 'rejected' | 'enrolled'
          submitted_at: string | null
          snapshot_data: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          university_id: string
          program_id: string
          cycle_id: string
          status?: 'draft' | 'payment_pending' | 'submitted' | 'under_review' | 'interview_scheduled' | 'waitlisted' | 'offer_released' | 'rejected' | 'enrolled'
          submitted_at?: string | null
          snapshot_data?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          university_id?: string
          program_id?: string
          cycle_id?: string
          status?: 'draft' | 'payment_pending' | 'submitted' | 'under_review' | 'interview_scheduled' | 'waitlisted' | 'offer_released' | 'rejected' | 'enrolled'
          submitted_at?: string | null
          snapshot_data?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      programs: {
        Row: {
          id: string
          university_id: string
          name: string
          description: string | null
          degree_type: 'UG' | 'PG' | 'Diploma' | 'Certificate' | 'PhD' | null
          duration_years: number | null
          intake_capacity: number | null
          application_fee_override: number | null
          deadline_override: string | null
          eligibility_matrix: Json
          custom_form_schema: Json
          required_documents: string[] | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          university_id: string
          name: string
          description?: string | null
          degree_type?: 'UG' | 'PG' | 'Diploma' | 'Certificate' | 'PhD' | null
          duration_years?: number | null
          intake_capacity?: number | null
          application_fee_override?: number | null
          deadline_override?: string | null
          eligibility_matrix?: Json
          custom_form_schema?: Json
          required_documents?: string[] | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          university_id?: string
          name?: string
          description?: string | null
          degree_type?: 'UG' | 'PG' | 'Diploma' | 'Certificate' | 'PhD' | null
          duration_years?: number | null
          intake_capacity?: number | null
          application_fee_override?: number | null
          deadline_override?: string | null
          eligibility_matrix?: Json
          custom_form_schema?: Json
          required_documents?: string[] | null
          is_active?: boolean
          created_at?: string
        }
      }
    }
  }
}
