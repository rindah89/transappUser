module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase,
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-route] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://nqajrzfpfoaflcyuslqm.supabase.co") || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ("TURBOPACK compile-time value", "sb_publishable_Qu3M6ZoPYjXkbTQj0sCdCQ__7W8Xih0");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
}) : "TURBOPACK unreachable";
// Client for server-side admin operations (uses service role key - REQUIRED for API routes)
// WARNING: Only use this in API routes or getServerSideProps. NEVER expose to client.
// Only check for service key on server side (not during client-side module evaluation)
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
if (isServer && !supabaseServiceKey) {
    console.error('⚠️  SUPABASE_SERVICE_ROLE_KEY is missing! Server-side API routes will not work.');
    console.error('   Get it from: Supabase Dashboard → Settings → API → service_role key');
    console.error('   Make sure it\'s in your .env.local file (not .env, as .env.local is not committed to git)');
}
const supabaseAdmin = supabaseServiceKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
    },
    db: {
        schema: 'public'
    }
}) : (()=>{
    // Only throw error on server side when actually trying to use it
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for server-side operations.\n' + 'Please add it to your .env.local file:\n' + 'SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here\n' + 'Get it from: Supabase Dashboard → Settings → API → service_role key');
    }
    // On client side, return a dummy object that will throw if used
    return null;
})();
}),
"[project]/src/exceptions/HttpException.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpException",
    ()=>HttpException
]);
class HttpException extends Error {
    status;
    message;
    constructor(status, message){
        super(message);
        this.status = status;
        this.message = message;
    }
}
}),
"[project]/src/utils/util.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */ __turbopack_context__.s([
    "isEmpty",
    ()=>isEmpty
]);
const isEmpty = (value)=>{
    if (value === null) {
        return true;
    } else if (typeof value !== 'number' && value === '') {
        return true;
    } else if (typeof value === 'undefined' || value === undefined) {
        return true;
    } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
        return true;
    } else {
        return false;
    }
};
}),
"[project]/src/services/user.auth.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/exceptions/HttpException.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/util.ts [app-route] (ecmascript)");
;
;
;
class UserAuthService {
    /**
   * Sign up a new user using Supabase Auth
   * Creates auth user and then creates user record in users table
   */ async signup(userData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(userData)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Invalid credentials!');
        if (!userData.password || userData.password.length < 6) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Password must be at least 6 characters');
        }
        // Step 1: Create auth user using Supabase Admin API
        // We confirm the email immediately so the user can be logged in right after signup.
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.admin.createUser({
            email: userData.email,
            password: userData.password,
            email_confirm: true,
            user_metadata: {
                name: userData.name,
                phone_number: userData.phoneNumber
            }
        });
        if (authError) {
            if (authError.message.includes('already registered')) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](409, 'This email already exists');
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, authError.message);
        }
        if (!authData.user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, 'Failed to create auth user');
        }
        // Step 2: Create user record in users table with auth user ID
        const userInsert = {
            auth_id: authData.user.id,
            email: userData.email,
            name: userData.name || null,
            sex: userData.sex || null,
            age: userData.age || null,
            phone_number: userData.phoneNumber || null,
            id_card_number: userData.idCardNumber || null
        };
        const { data: newUser, error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users').insert(userInsert).select().single();
        if (insertError) {
            // If user table insert fails, try to clean up auth user
            if (authData.user) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.admin.deleteUser(authData.user.id);
            }
            if (insertError.code === '23505') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](409, 'This email already exists');
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, insertError.message);
        }
        if (!newUser) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, 'Failed to create user');
        }
        // Step 3: Create a session (so the frontend doesn't need to make a second "login" request)
        // Note: This should succeed because we confirm the email immediately above.
        const { data: signInData, error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.signInWithPassword({
            email: userData.email,
            password: userData.password
        });
        return {
            user: newUser,
            session: signInError ? null : signInData.session
        };
    }
    /**
   * Login using Supabase Auth
   * Validates password and returns user with session
   */ async login(userData) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(userData)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Fields cannot be empty!');
        if (!userData.password) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Password is required');
        }
        // Use Supabase Auth to sign in (handles password verification)
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.signInWithPassword({
            email: userData.email,
            password: userData.password
        });
        if (authError) {
            if (authError.message.includes('Invalid login credentials')) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](401, 'Invalid email or password');
            }
            if (authError.message.includes('Email not confirmed')) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](403, 'Please verify your email before logging in');
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, authError.message);
        }
        if (!authData.user || !authData.session) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](401, 'Invalid email or password');
        }
        // Get user record from users table
        const { data: user, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users').select('*').eq('auth_id', authData.user.id).single();
        if (userError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, 'Failed to fetch user data');
        }
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](404, 'User not found');
        }
        return {
            user,
            session: authData.session
        };
    }
    /**
   * Delete account using Supabase Auth
   * Deletes both auth user and user record
   */ async deleteAccount(userId) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(userId)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'User ID is required');
        // Fetch auth_id before deleting the row
        const { data: userRow, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users').select('auth_id').eq('id', userId).single();
        if (fetchError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, fetchError.message);
        }
        // Delete user record from users table
        const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users').delete().eq('id', userId);
        if (deleteError) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, deleteError.message);
        }
        // Delete auth user (if linked)
        if (userRow?.auth_id) {
            const { error: authDeleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.admin.deleteUser(userRow.auth_id);
            if (authDeleteError) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, authDeleteError.message);
            }
        }
        return {
            message: 'Account deleted successfully'
        };
    }
    /**
   * Reset password using Supabase Auth
   * Sends password reset email
   */ async resetPassword(email) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(email)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Email is required');
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.resetPasswordForEmail(email, {
            redirectTo: `${("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000'}/user-reset`
        });
        if (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, error.message);
        }
        return {
            message: 'Password reset email sent'
        };
    }
    /**
   * Update password using Supabase Auth
   * Requires valid session token
   */ async updatePassword(userId, newPassword) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(userId) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(newPassword)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'User ID and password are required');
        }
        if (newPassword.length < 6) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Password must be at least 6 characters');
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.admin.updateUserById(userId, {
            password: newPassword
        });
        if (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, error.message);
        }
        return {
            message: 'Password updated successfully'
        };
    }
    /**
   * Get user by ID
   */ async getUserByAuthId(authId) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(authId)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](400, 'Auth ID is required');
        const { data: user, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users').select('*').eq('auth_id', authId).single();
        if (error) {
            if (error.code === 'PGRST116') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](404, 'User not found');
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, error.message);
        }
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](404, 'User not found');
        }
        return user;
    }
    /**
   * Verify session token and get user
   */ async verifySession(accessToken) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$util$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmpty"])(accessToken)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](401, 'Access token is required');
        const { data: sessionData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.getUser(accessToken);
        if (error || !sessionData.user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](401, 'Invalid or expired token');
        }
        const user = await this.getUserByAuthId(sessionData.user.id);
        return {
            user,
            session: sessionData
        };
    }
}
const __TURBOPACK__default__export__ = UserAuthService;
}),
"[project]/src/app/api/v1/bookings/user-bookings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/exceptions/HttpException.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$auth$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.auth.service.ts [app-route] (ecmascript)");
;
;
;
;
;
const userAuthService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$auth$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
async function getAccessToken(request) {
    const authHeader = request.headers.get('authorization');
    if (authHeader?.toLowerCase().startsWith('bearer ')) {
        return authHeader.slice(7).trim();
    }
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sbAccessToken = cookieStore.get('sb-access-token')?.value;
    if (sbAccessToken) return sbAccessToken;
    const legacy = cookieStore.get('auth-token')?.value;
    if (legacy) {
        try {
            const parsed = JSON.parse(legacy);
            if (parsed?.token) return parsed.token;
        } catch  {
        // ignore
        }
    }
    return null;
}
function parseJourneyDeparture(journeyDate, departureTime) {
    if (!journeyDate || !departureTime) return null;
    // Handles "HH:mm" and also attempts "h:mm A" (e.g., "6:30 PM")
    const trimmed = departureTime.trim();
    const ampm = trimmed.match(/(\d{1,2}):(\d{2})\s*([AaPp][Mm])/);
    if (ampm) {
        let h = Number(ampm[1]);
        const m = Number(ampm[2]);
        const ap = ampm[3].toLowerCase();
        if (ap === 'pm' && h < 12) h += 12;
        if (ap === 'am' && h === 12) h = 0;
        const dt = new Date(`${journeyDate}T00:00:00`);
        if (Number.isNaN(dt.getTime())) return null;
        dt.setHours(h, m, 0, 0);
        return dt;
    }
    const hm = trimmed.match(/^(\d{1,2}):(\d{2})$/);
    if (hm) {
        const h = Number(hm[1]);
        const m = Number(hm[2]);
        const dt = new Date(`${journeyDate}T00:00:00`);
        if (Number.isNaN(dt.getTime())) return null;
        dt.setHours(h, m, 0, 0);
        return dt;
    }
    // Last resort
    const parsed = new Date(`${journeyDate} ${trimmed}`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
}
async function cancelBookingReleaseSeat(bookingId, tripId) {
    // Prefer DB function (atomic)
    const { error: rpcError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].rpc('cancel_booking_release_seat', {
        p_booking_id: bookingId
    });
    if (!rpcError) return;
    // Fallback: mark cancelled + decrement trip reserved
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('bookings').update({
        status: 'CANCELLED'
    }).eq('id', bookingId);
    const { data: trip } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('trips').select('reserved').eq('id', tripId).single();
    const reserved = trip?.reserved ?? 0;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('trips').update({
        reserved: Math.max(0, Number(reserved) - 1)
    }).eq('id', tripId);
}
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const userIdParam = searchParams.get('userId');
        let userId = userIdParam ? Number(userIdParam) : null;
        // Prefer auth-based lookup if userId not provided (or invalid)
        if (!userId || !Number.isFinite(userId)) {
            const accessToken = await getAccessToken(request);
            if (!accessToken) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: true,
                    message: 'Unauthorized'
                }, {
                    status: 401,
                    headers: {
                        'Cache-Control': 'no-store'
                    }
                });
            }
            const { user } = await userAuthService.verifySession(accessToken);
            userId = user.id;
        }
        const currentYear = new Date().getFullYear().toString();
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('bookings').select('*').eq('booker_id', userId).eq('year', currentYear).order('created_at', {
            ascending: false
        });
        if (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, error.message);
        }
        const bookings = data || [];
        // Auto-cancel reservations 30 mins before departure time
        // BUT only if they are still unpaid / unconfirmed (i.e. not marked as Paid/Confirmed by admin app)
        const now = Date.now();
        const protectedStatuses = new Set([
            'PAID',
            'CONFIRMED',
            'BOOKED'
        ]);
        const cancelableStatuses = new Set([
            '',
            'PENDING',
            'RESERVED',
            'CASH_PENDING'
        ]);
        const toCancel = bookings.filter((b)=>{
            const status = String(b.status ?? '').trim().toUpperCase();
            // Never auto-cancel if admin/payment already confirmed it
            if (protectedStatuses.has(status)) return false;
            if (b?.transaction_id) return false;
            // Never auto-cancel already-cancelled items (handle various spellings/casing)
            if (status.startsWith('CANCEL')) return false;
            return cancelableStatuses.has(status);
        });
        for (const b of toCancel){
            const dt = parseJourneyDeparture(b.journey_date, b.departure_time);
            if (!dt) continue;
            const cutoff = dt.getTime() - 30 * 60 * 1000;
            if (now >= cutoff) {
                try {
                    await cancelBookingReleaseSeat(b.id, b.trip_id);
                    b.status = 'CANCELLED';
                } catch  {
                // ignore
                }
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: false,
            message: 'Bookings retrieved successfully',
            data: bookings
        }, {
            headers: {
                // Cache for 30 seconds, revalidate in background
                'Cache-Control': 'private, s-maxage=30, stale-while-revalidate=60'
            }
        });
    } catch (error) {
        const httpError = error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: true,
            message: httpError.message || 'Failed to retrieve bookings'
        }, {
            status: httpError.status || 500,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b24e3cb9._.js.map