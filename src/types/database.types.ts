export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      admins: {
        Row: {
          admin_id: number | null
          age: number | null
          agency_id: number
          agency_logo: string | null
          agency_name: string | null
          auth_id: string | null
          created_at: string | null
          dl_valid_till: string | null
          drivers_licence_no: string | null
          email: string
          id: number
          id_card_number: string | null
          id_valid_till: string | null
          location: string | null
          name: string | null
          password: string
          permissions: string
          personnel_type: string | null
          phone_number: number | null
          sex: string | null
          surname: string | null
          updated_at: string | null
        }
        Insert: {
          admin_id?: number | null
          age?: number | null
          agency_id: number
          agency_logo?: string | null
          agency_name?: string | null
          auth_id?: string | null
          created_at?: string | null
          dl_valid_till?: string | null
          drivers_licence_no?: string | null
          email: string
          id?: number
          id_card_number?: string | null
          id_valid_till?: string | null
          location?: string | null
          name?: string | null
          password: string
          permissions: string
          personnel_type?: string | null
          phone_number?: number | null
          sex?: string | null
          surname?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_id?: number | null
          age?: number | null
          agency_id?: number
          agency_logo?: string | null
          agency_name?: string | null
          auth_id?: string | null
          created_at?: string | null
          dl_valid_till?: string | null
          drivers_licence_no?: string | null
          email?: string
          id?: number
          id_card_number?: string | null
          id_valid_till?: string | null
          location?: string | null
          name?: string | null
          password?: string
          permissions?: string
          personnel_type?: string | null
          phone_number?: number | null
          sex?: string | null
          surname?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admins_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      agencies: {
        Row: {
          created_at: string | null
          email: string
          id: number
          location: string | null
          logo: string | null
          name: string
          phone_number: string | null
          reservation_fee_cap_xaf: number
          reservation_fee_mode: string
          reservation_fee_percent: number
          reservation_fee_xaf: number
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          location?: string | null
          logo?: string | null
          name: string
          phone_number?: string | null
          reservation_fee_cap_xaf?: number
          reservation_fee_mode?: string
          reservation_fee_percent?: number
          reservation_fee_xaf?: number
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          location?: string | null
          logo?: string | null
          name?: string
          phone_number?: string | null
          reservation_fee_cap_xaf?: number
          reservation_fee_mode?: string
          reservation_fee_percent?: number
          reservation_fee_xaf?: number
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      anonymous_users: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          id_card_number: string
          name: string
          phone_number: number
          sex: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          id_card_number: string
          name: string
          phone_number: number
          sex: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          id_card_number?: string
          name?: string
          phone_number?: number
          sex?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          agency_id: number
          agency_name: string
          arrival_city: string
          booker_id: number | null
          booking_fee: number | null
          created_at: string | null
          departure_city: string
          departure_time: string
          id: number
          id_card_no: string | null
          journey_date: string
          month: string
          name: string
          number_of_seats: string | null
          payer_email: string | null
          payer_name: string | null
          payer_phone: number | null
          phone_number: number | null
          price: number
          seat: string | null
          status: string | null
          ticket_number: string | null
          ticket_type: string | null
          transaction_id: string | null
          trip_id: number
          updated_at: string | null
          week: string | null
          year: string
        }
        Insert: {
          agency_id: number
          agency_name: string
          arrival_city: string
          booker_id?: number | null
          booking_fee?: number | null
          created_at?: string | null
          departure_city: string
          departure_time: string
          id?: number
          id_card_no?: string | null
          journey_date: string
          month: string
          name: string
          number_of_seats?: string | null
          payer_email?: string | null
          payer_name?: string | null
          payer_phone?: number | null
          phone_number?: number | null
          price: number
          seat?: string | null
          status?: string | null
          ticket_number?: string | null
          ticket_type?: string | null
          transaction_id?: string | null
          trip_id: number
          updated_at?: string | null
          week?: string | null
          year: string
        }
        Update: {
          agency_id?: number
          agency_name?: string
          arrival_city?: string
          booker_id?: number | null
          booking_fee?: number | null
          created_at?: string | null
          departure_city?: string
          departure_time?: string
          id?: number
          id_card_no?: string | null
          journey_date?: string
          month?: string
          name?: string
          number_of_seats?: string | null
          payer_email?: string | null
          payer_name?: string | null
          payer_phone?: number | null
          phone_number?: number | null
          price?: number
          seat?: string | null
          status?: string | null
          ticket_number?: string | null
          ticket_type?: string | null
          transaction_id?: string | null
          trip_id?: number
          updated_at?: string | null
          week?: string | null
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_booker_id_fkey"
            columns: ["booker_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      items: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          order_id: number
          price: number
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          order_id: number
          price: number
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          order_id?: number
          price?: number
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          agency_branch: string
          agency_id: number
          city: string
          country: string
          created_at: string | null
          id: number
          location_type: string
          neighbourhood: string
          updated_at: string | null
        }
        Insert: {
          agency_branch: string
          agency_id: number
          city: string
          country: string
          created_at?: string | null
          id?: number
          location_type: string
          neighbourhood: string
          updated_at?: string | null
        }
        Update: {
          agency_branch?: string
          agency_id?: number
          city?: string
          country?: string
          created_at?: string | null
          id?: number
          location_type?: string
          neighbourhood?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "locations_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          delivery_date: string | null
          delivery_location: string | null
          delivery_time: string | null
          id: number
          order_number: string
          pickup_date: string | null
          pickup_location: string | null
          pickup_time: string | null
          provider_id: number
          title: string | null
          total_items: number
          total_price: number
          updated_at: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          delivery_date?: string | null
          delivery_location?: string | null
          delivery_time?: string | null
          id?: number
          order_number: string
          pickup_date?: string | null
          pickup_location?: string | null
          pickup_time?: string | null
          provider_id: number
          title?: string | null
          total_items: number
          total_price: number
          updated_at?: string | null
          user_id: number
        }
        Update: {
          created_at?: string | null
          delivery_date?: string | null
          delivery_location?: string | null
          delivery_time?: string | null
          id?: number
          order_number?: string
          pickup_date?: string | null
          pickup_location?: string | null
          pickup_time?: string | null
          provider_id?: number
          title?: string | null
          total_items?: number
          total_price?: number
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      parcels: {
        Row: {
          agency_id: number
          agency_name: string
          arrival_date: string | null
          created_at: string | null
          departure_date: string | null
          from_location: string
          id: number
          month: string
          parcel_number: string | null
          parcel_type: string
          price: number
          received_date: string | null
          receiver_name: string
          receiver_phone: number
          sender_name: string
          sender_phone: number
          status: string
          to_location: string
          updated_at: string | null
          vehicle_number: string | null
          year: string
        }
        Insert: {
          agency_id: number
          agency_name: string
          arrival_date?: string | null
          created_at?: string | null
          departure_date?: string | null
          from_location: string
          id?: number
          month: string
          parcel_number?: string | null
          parcel_type: string
          price: number
          received_date?: string | null
          receiver_name: string
          receiver_phone: number
          sender_name: string
          sender_phone: number
          status: string
          to_location: string
          updated_at?: string | null
          vehicle_number?: string | null
          year: string
        }
        Update: {
          agency_id?: number
          agency_name?: string
          arrival_date?: string | null
          created_at?: string | null
          departure_date?: string | null
          from_location?: string
          id?: number
          month?: string
          parcel_number?: string | null
          parcel_type?: string
          price?: number
          received_date?: string | null
          receiver_name?: string
          receiver_phone?: number
          sender_name?: string
          sender_phone?: number
          status?: string
          to_location?: string
          updated_at?: string | null
          vehicle_number?: string | null
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "parcels_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_records: {
        Row: {
          agency_id: number
          amount_due_at_counter: number
          amount_due_now: number
          booking_id: number
          created_at: string | null
          currency: string
          discount_amount: number
          id: number
          metadata: Json | null
          payment_method: string
          provider: string | null
          provider_reference: string | null
          reservation_fee_amount: number
          status: string
          ticket_amount: number
          trip_id: number
          updated_at: string | null
          user_id: number | null
          verification_details: Json | null
          verified_at: string | null
        }
        Insert: {
          agency_id: number
          amount_due_at_counter?: number
          amount_due_now?: number
          booking_id: number
          created_at?: string | null
          currency?: string
          discount_amount?: number
          id?: number
          metadata?: Json | null
          payment_method: string
          provider?: string | null
          provider_reference?: string | null
          reservation_fee_amount?: number
          status?: string
          ticket_amount?: number
          trip_id: number
          updated_at?: string | null
          user_id?: number | null
          verification_details?: Json | null
          verified_at?: string | null
        }
        Update: {
          agency_id?: number
          amount_due_at_counter?: number
          amount_due_now?: number
          booking_id?: number
          created_at?: string | null
          currency?: string
          discount_amount?: number
          id?: number
          metadata?: Json | null
          payment_method?: string
          provider?: string | null
          provider_reference?: string | null
          reservation_fee_amount?: number
          status?: string
          ticket_amount?: number
          trip_id?: number
          updated_at?: string | null
          user_id?: number | null
          verification_details?: Json | null
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_records_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_records_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_records_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      personnel: {
        Row: {
          age: number
          agency_id: number
          agency_logo: string | null
          agency_name: string
          auth_id: string | null
          created_at: string | null
          dl_valid_till: string | null
          drivers_licence_no: string | null
          email: string
          id: number
          id_card_number: string
          id_valid_till: string | null
          location: string
          name: string
          password: string
          permissions: string
          personnel_type: string
          phone_number: number | null
          sex: string
          surname: string
          updated_at: string | null
        }
        Insert: {
          age: number
          agency_id: number
          agency_logo?: string | null
          agency_name: string
          auth_id?: string | null
          created_at?: string | null
          dl_valid_till?: string | null
          drivers_licence_no?: string | null
          email: string
          id?: number
          id_card_number: string
          id_valid_till?: string | null
          location: string
          name: string
          password: string
          permissions: string
          personnel_type: string
          phone_number?: number | null
          sex: string
          surname: string
          updated_at?: string | null
        }
        Update: {
          age?: number
          agency_id?: number
          agency_logo?: string | null
          agency_name?: string
          auth_id?: string | null
          created_at?: string | null
          dl_valid_till?: string | null
          drivers_licence_no?: string | null
          email?: string
          id?: number
          id_card_number?: string
          id_valid_till?: string | null
          location?: string
          name?: string
          password?: string
          permissions?: string
          personnel_type?: string
          phone_number?: number | null
          sex?: string
          surname?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "personnel_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      provider_profiles: {
        Row: {
          created_at: string | null
          id: number
          location: string
          name: string
          operating_hours: string
          prefered_locations: string
          services: string
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          location: string
          name: string
          operating_hours: string
          prefered_locations: string
          services: string
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          location?: string
          name?: string
          operating_hours?: string
          prefered_locations?: string
          services?: string
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "provider_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
        ]
      }
      providers: {
        Row: {
          business_name: string | null
          created_at: string | null
          email: string | null
          id: number
          password: string
          phone: string | null
          preferred_locations: string[] | null
          quarter: string | null
          reset_code: string | null
          town: string | null
          updated_at: string | null
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          password: string
          phone?: string | null
          preferred_locations?: string[] | null
          quarter?: string | null
          reset_code?: string | null
          town?: string | null
          updated_at?: string | null
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          password?: string
          phone?: string | null
          preferred_locations?: string[] | null
          quarter?: string | null
          reset_code?: string | null
          town?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      reservation_promotions: {
        Row: {
          agency_id: number
          code: string
          created_at: string | null
          discount_type: string
          discount_value: number
          ends_at: string | null
          id: number
          is_active: boolean
          starts_at: string | null
          updated_at: string | null
        }
        Insert: {
          agency_id: number
          code: string
          created_at?: string | null
          discount_type: string
          discount_value: number
          ends_at?: string | null
          id?: number
          is_active?: boolean
          starts_at?: string | null
          updated_at?: string | null
        }
        Update: {
          agency_id?: number
          code?: string
          created_at?: string | null
          discount_type?: string
          discount_value?: number
          ends_at?: string | null
          id?: number
          is_active?: boolean
          starts_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reservation_promotions_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
      reset_tokens: {
        Row: {
          created_at: string | null
          email: string
          id: number
          token: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          token: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          token?: string
        }
        Relationships: []
      }
      seat_assignments: {
        Row: {
          agency_id: number
          booking_id: number | null
          created_at: string | null
          id: number
          locked_until: string | null
          seat_number: string
          status: string
          trip_id: number
          updated_at: string | null
        }
        Insert: {
          agency_id: number
          booking_id?: number | null
          created_at?: string | null
          id?: number
          locked_until?: string | null
          seat_number: string
          status?: string
          trip_id: number
          updated_at?: string | null
        }
        Update: {
          agency_id?: number
          booking_id?: number | null
          created_at?: string | null
          id?: number
          locked_until?: string | null
          seat_number?: string
          status?: string
          trip_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "seat_assignments_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seat_assignments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seat_assignments_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      super_admins: {
        Row: {
          auth_id: string | null
          created_at: string | null
          email: string
          id: number
          password: string
          permissions: string
          updated_at: string | null
        }
        Insert: {
          auth_id?: string | null
          created_at?: string | null
          email: string
          id?: number
          password: string
          permissions: string
          updated_at?: string | null
        }
        Update: {
          auth_id?: string | null
          created_at?: string | null
          email?: string
          id?: number
          password?: string
          permissions?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tokens: {
        Row: {
          created_at: string | null
          expired_at: string
          id: number
          token: string
          user_id: number
        }
        Insert: {
          created_at?: string | null
          expired_at: string
          id?: number
          token: string
          user_id: number
        }
        Update: {
          created_at?: string | null
          expired_at?: string
          id?: number
          token?: string
          user_id?: number
        }
        Relationships: []
      }
      trips: {
        Row: {
          agency_id: number
          agency_logo: string | null
          agency_name: string
          arrival: string
          boarding_time: string | null
          created_at: string | null
          departure: string
          from_location: string
          id: number
          journey_date: string
          month: string
          price: number
          reserved: number
          seats: number
          status: string | null
          to_location: string
          trip_type: string | null
          updated_at: string | null
          vehicle_id: number | null
          vehicle_no: string | null
          year: string
        }
        Insert: {
          agency_id: number
          agency_logo?: string | null
          agency_name: string
          arrival: string
          boarding_time?: string | null
          created_at?: string | null
          departure: string
          from_location: string
          id?: number
          journey_date: string
          month: string
          price: number
          reserved?: number
          seats: number
          status?: string | null
          to_location: string
          trip_type?: string | null
          updated_at?: string | null
          vehicle_id?: number | null
          vehicle_no?: string | null
          year: string
        }
        Update: {
          agency_id?: number
          agency_logo?: string | null
          agency_name?: string
          arrival?: string
          boarding_time?: string | null
          created_at?: string | null
          departure?: string
          from_location?: string
          id?: number
          journey_date?: string
          month?: string
          price?: number
          reserved?: number
          seats?: number
          status?: string | null
          to_location?: string
          trip_type?: string | null
          updated_at?: string | null
          vehicle_id?: number | null
          vehicle_no?: string | null
          year?: string
        }
        Relationships: [
          {
            foreignKeyName: "trips_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trips_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          age: number
          created_at: string | null
          email: string | null
          front_back_id: string
          id: number
          id_card_number: string
          id_valid_till: string
          momo_number: string
          name: string
          password: string | null
          phone_number: string
          sex: string
          surname: string
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          age: number
          created_at?: string | null
          email?: string | null
          front_back_id: string
          id?: number
          id_card_number: string
          id_valid_till: string
          momo_number: string
          name: string
          password?: string | null
          phone_number: string
          sex: string
          surname: string
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          age?: number
          created_at?: string | null
          email?: string | null
          front_back_id?: string
          id?: number
          id_card_number?: string
          id_valid_till?: string
          momo_number?: string
          name?: string
          password?: string | null
          phone_number?: string
          sex?: string
          surname?: string
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          age: number | null
          auth_id: string | null
          created_at: string | null
          email: string
          id: number
          id_card_number: string | null
          name: string | null
          phone_number: string | null
          reset_code: string | null
          sex: string | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          auth_id?: string | null
          created_at?: string | null
          email: string
          id?: number
          id_card_number?: string | null
          name?: string | null
          phone_number?: string | null
          reset_code?: string | null
          sex?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          auth_id?: string | null
          created_at?: string | null
          email?: string
          id?: number
          id_card_number?: string | null
          name?: string | null
          phone_number?: string | null
          reset_code?: string | null
          sex?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          agency_id: number
          created_at: string | null
          id: number
          location: string | null
          make: string | null
          model: string | null
          number_plate: string | null
          passenger_seats: number | null
          service_year: string | null
          total_seats: number | null
          updated_at: string | null
          vehicle_type: string | null
        }
        Insert: {
          agency_id: number
          created_at?: string | null
          id?: number
          location?: string | null
          make?: string | null
          model?: string | null
          number_plate?: string | null
          passenger_seats?: number | null
          service_year?: string | null
          total_seats?: number | null
          updated_at?: string | null
          vehicle_type?: string | null
        }
        Update: {
          agency_id?: number
          created_at?: string | null
          id?: number
          location?: string | null
          make?: string | null
          model?: string | null
          number_plate?: string | null
          passenger_seats?: number | null
          service_year?: string | null
          total_seats?: number | null
          updated_at?: string | null
          vehicle_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "agencies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cancel_booking_release_seat: {
        Args: { p_booking_id: number }
        Returns: Json
      }
      cleanup_expired_seat_locks: { Args: never; Returns: number }
      confirm_booking_seat: {
        Args: { p_booking_id: number; p_transaction_id?: string }
        Returns: Json
      }
      create_booking_with_seat_assignment: {
        Args: {
          p_agency_name: string
          p_arrival_city: string
          p_booker_id: number
          p_customer_name: string
          p_departure_city: string
          p_departure_time: string
          p_id_card_no: string
          p_journey_date: string
          p_month: string
          p_phone_number: number
          p_price: number
          p_seat_number: string
          p_status?: string
          p_ticket_number: string
          p_trip_id: number
          p_year: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

// Convenience aliases used across the codebase
export type Admin = Database["public"]["Tables"]["admins"]["Row"]
export type Agency = Database["public"]["Tables"]["agencies"]["Row"]
export type Booking = Database["public"]["Tables"]["bookings"]["Row"]
export type BookingInsert = Database["public"]["Tables"]["bookings"]["Insert"]
export type BookingUpdate = Database["public"]["Tables"]["bookings"]["Update"]
export type Trip = Database["public"]["Tables"]["trips"]["Row"]
export type TripInsert = Database["public"]["Tables"]["trips"]["Insert"]
export type TripUpdate = Database["public"]["Tables"]["trips"]["Update"]
export type Parcel = Database["public"]["Tables"]["parcels"]["Row"]
export type ParcelInsert = Database["public"]["Tables"]["parcels"]["Insert"]
export type ParcelUpdate = Database["public"]["Tables"]["parcels"]["Update"]
export type Vehicle = Database["public"]["Tables"]["vehicles"]["Row"]
export type VehicleInsert = Database["public"]["Tables"]["vehicles"]["Insert"]
export type VehicleUpdate = Database["public"]["Tables"]["vehicles"]["Update"]
export type Personnel = Database["public"]["Tables"]["personnel"]["Row"]
export type PersonnelInsert = Database["public"]["Tables"]["personnel"]["Insert"]
export type PersonnelUpdate = Database["public"]["Tables"]["personnel"]["Update"]
export type Location = Database["public"]["Tables"]["locations"]["Row"]
export type LocationInsert = Database["public"]["Tables"]["locations"]["Insert"]
export type LocationUpdate = Database["public"]["Tables"]["locations"]["Update"]
export type PaymentRecord = Database["public"]["Tables"]["payment_records"]["Row"]
export type PaymentRecordInsert = Database["public"]["Tables"]["payment_records"]["Insert"]
export type PaymentRecordUpdate = Database["public"]["Tables"]["payment_records"]["Update"]
