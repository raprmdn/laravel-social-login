<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SingleSignOnController extends Controller
{
    public function provider($provider)
    {
        if (! in_array($provider, ['google', 'github'])) {
            abort(404, 'Provider not found.');
        }

        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        $user = Socialite::driver($provider)->user();
        $user = User::firstOrCreate([
            'email' => $user->getEmail(),
        ], [
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'password' => bcrypt(Str::random()),
            'provider' => $provider,
            'provider_id' => $user->getId(),
        ]);
        $user->forceFill([
            'email_verified_at' => now(),
        ])->save();
        auth()->login($user);

        return redirect()->route('dashboard');
    }
}
