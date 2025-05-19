<script setup>
import { ref } from 'vue';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updatePassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    deleteUser,
    EmailAuthProvider,
    reauthenticateWithCredential,
    verifyBeforeUpdateEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { auth } from '@/firebase';

const user = ref(auth.currentUser);
const email = ref('');
const password = ref('');
const newEmail = ref('');
const newPassword = ref('');
const reauthEmail = ref('');
const reauthPassword = ref('');

const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log('Registrirani korisnik:', userCredential.user);
    } catch (error) {
        console.error('Greška pri registraciji:', error.message);
    }
};

const login = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Prijavljeni korisnik:', userCredential.user);
    } catch (error) {
        console.error('Greška pri prijavi:', error.message);
    }
};

const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        user.value = result.user;
        console.log('Prijavljen s Google računom:', result.user.email);
    } catch (error) {
        console.error('Greška pri Google prijavi:', error.message);
    }
};

const logout = () => {
    signOut(auth);
};

const changeEmail = async () => {
    try {
        if (!auth.currentUser) {
            alert('Korisnik nije prijavljen.');
            return;
        }

        await verifyBeforeUpdateEmail(auth.currentUser, newEmail.value);
        alert('Verifikacijski email poslan na novu adresu. Promjena će biti aktivna nakon potvrde.');
    } catch (error) {
        console.error('Greška pri ažuriranju emaila:', error.message);
        alert('Greška: ' + error.message);
    }
};

const changePassword = async () => {
    try {
        await updatePassword(auth.currentUser, newPassword.value);
        console.log('Lozinka ažurirana');
    } catch (error) {
        console.error('Greška pri promjeni lozinke:', error.message);
    }
};

const sendVerification = async () => {
    try {
        await sendEmailVerification(auth.currentUser);
        console.log('Verifikacijski email poslan');
    } catch (error) {
        console.error('Greška pri slanju verifikacijskog emaila:', error.message);
    }
};

const sendPasswordReset = async () => {
    try {
        await sendPasswordResetEmail(auth, email.value);
        console.log('Email za reset lozinke poslan');
    } catch (error) {
        console.error('Greška pri slanju emaila za reset:', error.message);
    }
};

const removeUser = async () => {
    try {
        await deleteUser(auth.currentUser);
        console.log('Korisnik obrisan');
    } catch (error) {
        console.error('Greška pri brisanju korisnika:', error.message);
    }
};

const reauthenticate = async () => {
    try {
        const credential = EmailAuthProvider.credential(reauthEmail.value, reauthPassword.value);
        await reauthenticateWithCredential(auth.currentUser, credential);
        console.log('Ponovna autentifikacija uspješna');
        return true;
    } catch (error) {
        console.error('Greška pri ponovnoj autentifikaciji:', error.message);
        return false;
    }
};

onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    if (currentUser) {
        console.log('Prijavljen korisnik:', currentUser.email);
    } else {
        console.log('Nema prijavljenog korisnika');
    }
});
</script>

<template>
    <div>
        <form @submit.prevent="register">
            <h3>Registracija</h3>
            <input v-model="email" type="email" placeholder="Email"><br>
            <input v-model="password" type="password" placeholder="Lozinka"><br>
            <button type="submit">Registriraj se</button>
        </form>

        <hr>

        <form @submit.prevent="login">
            <h3>Prijava</h3>
            <input v-model="email" type="email" placeholder="Email"><br>
            <input v-model="password" type="password" placeholder="Lozinka"><br>
            <button type="submit">Prijavi se</button>
        </form>

        <button @click="loginWithGoogle">Prijavi se putem Google računa</button>

        <hr>

        <div v-if="user">
            <p>Prijavljeni ste kao: <b>{{ user.email }}</b></p>
            <p>Provider: <b>{{ user.providerData[0].providerId }}</b></p>
            <button @click="logout">Odjavi se</button>

            <hr>

            <h3>Upravljanje računom</h3>

            <div v-if="user.providerData[0].providerId != 'google.com'">

                <input v-model="newEmail" type="email" placeholder="Novi email">
                <button @click="changeEmail">Promijeni email</button><br><br>

                <input v-model="newPassword" type="password" placeholder="Nova lozinka">
                <button @click="changePassword">Promijeni lozinku</button><br><br>

                <button @click="sendVerification">Pošalji verifikacijski email</button><br><br>

                <button @click="sendPasswordReset">Pošalji email za reset lozinke</button><br><br>

                <h4>Ponovna autentifikacija</h4>
                <input v-model="reauthEmail" type="email" placeholder="Email"><br>
                <input v-model="reauthPassword" type="password" placeholder="Lozinka"><br>
                <button @click="reauthenticate">Ponovno se autentificiraj</button>

            </div>

            <br>

            <button @click="removeUser">Obriši korisnika</button><br><br>
        </div>

        <div v-else>
            <p>Niste prijavljeni</p>
        </div>
    </div>
</template>