// Translations object
const translations = {
    en: {
        nav: {
            home: 'Home',
            shop: 'Shop',
            about: 'About',
            contact: 'Contact'
        },
        about: {
            title: 'About Nereus Interior',
            ourStory: 'Our Story',
            story: 'Founded in Medan, 2025, Nereus Interior has been dedicated to bringing beautiful, high-quality furniture to homes across Indonesia. We believe that everyone deserves to live in a space they love, and we\'re committed to making that possible through our carefully curated collection of furniture pieces.',
            ourMission: 'Our Mission',
            mission: 'Our mission is to transform living spaces into comfortable, stylish havens that reflect the unique personality of each homeowner. We carefully select each piece in our collection, ensuring it meets our high standards for quality, comfort, and design.',
            ourValues: 'Our Values',
            value1: 'Quality: We never compromise on the quality of our products',
            value2: 'Customer Satisfaction: Your happiness is our priority',
            value3: 'Innovation: We continuously update our collection with the latest trends',
            value4: 'Sustainability: We\'re committed to eco-friendly practices'
        },
        hero: {
            title: 'Design Your Dream Space',
            subtitle: 'Discover our collection of premium furniture pieces that will transform your home into a haven of comfort and style.',
            cta: 'Shop Now'
        },
        featured: {
            title: 'Featured Products'
        },
        newsletter: {
            title: 'Subscribe to Our Newsletter',
            subtitle: 'Stay updated with our latest collections and exclusive offers.',
            placeholder: 'Enter your email',
            button: 'Subscribe'
        },
        footer: {
            quickLinks: 'Quick Links',
            contactUs: 'Contact Us',
            followUs: 'Follow Us',
            copyright: '© 2025 Nereus Interior by Tondi. All rights reserved.'
        },
        shop: {
            title: 'Our Collection',
            filters: {
                all: 'All',
                sofas: 'Sofas',
                tables: 'Tables',
                chairs: 'Chairs',
                storage: 'Storage',
                beds: 'Beds'
            },
            sort: {
                placeholder: 'Sort by',
                priceLow: 'Price: Low to High',
                priceHigh: 'Price: High to Low',
                name: 'Name: A to Z'
            }
        },
        cart: {
            title: 'Shopping Cart',
            empty: 'Your cart is empty',
            continueShopping: 'Continue Shopping',
            orderSummary: 'Order Summary',
            subtotal: 'Subtotal',
            shipping: 'Shipping',
            total: 'Total',
            checkout: 'Proceed to Checkout'
        },
        checkout: {
            title: 'Checkout',
            shipping: {
                title: 'Shipping Information',
                fullName: 'Full Name',
                email: 'Email Address',
                phone: 'Phone Number',
                address: 'Address',
                city: 'City',
                postalCode: 'Postal Code',
                country: 'Country'
            },
            payment: {
                title: 'Payment Information',
                method: 'Payment Method',
                bank: 'Bank',
                vaNumber: 'Virtual Account Number',
                cardNumber: 'Card Number',
                expiryDate: 'Expiry Date',
                cvv: 'CVV',
                placeOrder: 'Place Order'
            }
        },
        product: {
            addToCart: 'Add to Cart'
        },
        contact: {
            title: 'Contact Us',
            address: {
                title: 'Our Location',
                text: 'Medan Helvetia, Kota Medan, Indonesia'
            },
            phone: {
                title: 'Phone Number'
            },
            email: {
                title: 'Email Address'
            },
            hours: {
                title: 'Business Hours',
                text: 'Monday - Saturday: 9:00 AM - 8:00 PM',
                sunday: 'Sunday: 10:00 AM - 6:00 PM'
            },
            form: {
                title: 'Send Us a Message',
                name: 'Full Name',
                email: 'Email Address',
                subject: 'Subject',
                message: 'Message',
                submit: 'Send Message'
            }
        },
        profile: {
            title: "My Profile",
            personalInfo: "Personal Information",
            fullName: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            address: "Address",
            saveChanges: "Save Changes",
            settings: "Settings",
            notifications: "Notifications",
            emailNotif: "Email Notifications",
            orderUpdates: "Order Updates",
            preferences: "Preferences",
            darkMode: "Dark Mode"
        }
    },
    id: {
        nav: {
            home: 'Beranda',
            shop: 'Toko',
            about: 'Tentang',
            contact: 'Kontak'
        },
        about: {
            title: 'Tentang Nereus Interior',
            ourStory: 'Cerita Kami',
            story: 'Didirikan pada tahun 2020, Nereus Interior berdedikasi untuk menghadirkan furnitur berkualitas tinggi ke rumah-rumah di seluruh Indonesia. Kami percaya bahwa setiap orang berhak tinggal di ruang yang mereka sukai, dan kami berkomitmen untuk mewujudkannya melalui koleksi furnitur yang dipilih dengan cermat.',
            ourMission: 'Misi Kami',
            mission: 'Misi kami adalah mengubah ruang hidup menjadi tempat yang nyaman dan bergaya yang mencerminkan kepribadian unik setiap pemilik rumah. Kami memilih setiap produk dalam koleksi kami dengan cermat, memastikan memenuhi standar tinggi kami untuk kualitas, kenyamanan, dan desain.',
            ourValues: 'Nilai-Nilai Kami',
            value1: 'Kualitas: Kami tidak pernah mengorbankan kualitas produk kami',
            value2: 'Kepuasan Pelanggan: Kebahagiaan Anda adalah prioritas kami',
            value3: 'Inovasi: Kami terus memperbarui koleksi kami dengan tren terbaru',
            value4: 'Keberlanjutan: Kami berkomitmen pada praktik ramah lingkungan'
        },
        hero: {
            title: 'Desain Ruang Impian Anda',
            subtitle: 'Temukan koleksi perabotan premium kami yang akan mengubah rumah Anda menjadi tempat yang nyaman dan bergaya.',
            cta: 'Belanja Sekarang'
        },
        featured: {
            title: 'Produk Unggulan'
        },
        newsletter: {
            title: 'Berlangganan Newsletter',
            subtitle: 'Dapatkan informasi terbaru tentang koleksi dan penawaran eksklusif kami.',
            placeholder: 'Masukkan email Anda',
            button: 'Berlangganan'
        },
        footer: {
            quickLinks: 'Tautan Cepat',
            contactUs: 'Hubungi Kami',
            followUs: 'Ikuti Kami',
            copyright: '© 2025 Nereus Interior oleh Tondi. Hak Cipta Dilindungi.'
        },
        shop: {
            title: 'Koleksi Kami',
            filters: {
                all: 'Semua',
                sofas: 'Sofa',
                tables: 'Meja',
                chairs: 'Kursi',
                storage: 'Penyimpanan',
                beds: 'Tempat Tidur'
            },
            sort: {
                placeholder: 'Urutkan',
                priceLow: 'Harga: Rendah ke Tinggi',
                priceHigh: 'Harga: Tinggi ke Rendah',
                name: 'Nama: A ke Z'
            }
        },
        cart: {
            title: 'Keranjang Belanja',
            empty: 'Keranjang belanja Anda kosong',
            continueShopping: 'Lanjut Belanja',
            orderSummary: 'Ringkasan Pesanan',
            subtotal: 'Subtotal',
            shipping: 'Pengiriman',
            total: 'Total',
            checkout: 'Lanjut ke Pembayaran'
        },
        checkout: {
            title: 'Pembayaran',
            shipping: {
                title: 'Informasi Pengiriman',
                fullName: 'Nama Lengkap',
                email: 'Alamat Email',
                phone: 'Nomor Telepon',
                address: 'Alamat',
                city: 'Kota',
                postalCode: 'Kode Pos',
                country: 'Negara'
            },
            payment: {
                title: 'Informasi Pembayaran',
                method: 'Metode Pembayaran',
                bank: 'Bank',
                vaNumber: 'Nomor Rekening Virtual',
                cardNumber: 'Nomor Kartu',
                expiryDate: 'Tanggal Kadaluarsa',
                cvv: 'CVV',
                placeOrder: 'Buat Pesanan'
            }
        },
        product: {
            addToCart: 'Tambah ke Keranjang'
        },
        contact: {
            title: 'Hubungi Kami',
            address: {
                title: 'Lokasi Kami',
                text: 'Medan Helvetia, Kota Medan, Indonesia'
            },
            phone: {
                title: 'Nomor Telepon'
            },
            email: {
                title: 'Alamat Email'
            },
            hours: {
                title: 'Jam Operasional',
                text: 'Senin - Sabtu: 09:00 - 20:00',
                sunday: 'Minggu: 10:00 - 18:00'
            },
            form: {
                title: 'Kirim Pesan',
                name: 'Nama Lengkap',
                email: 'Alamat Email',
                subject: 'Subjek',
                message: 'Pesan',
                submit: 'Kirim Pesan'
            }
        },
        profile: {
            title: "Profil Saya",
            personalInfo: "Informasi Pribadi",
            fullName: "Nama Lengkap",
            email: "Alamat Email",
            phone: "Nomor Telepon",
            address: "Alamat",
            saveChanges: "Simpan Perubahan",
            settings: "Pengaturan",
            notifications: "Notifikasi",
            emailNotif: "Notifikasi Email",
            orderUpdates: "Pembaruan Pesanan",
            preferences: "Preferensi",
            darkMode: "Mode Gelap"
        }
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    try {
        // Validate language
        if (!translations[lang]) {
            console.error(`Language "${lang}" is not supported`);
            return;
        }

        // Update language
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Update content with smooth transition
        document.body.style.opacity = '0';
        setTimeout(() => {
            updateContent();
            updateLanguageButtons();
            document.body.style.opacity = '1';
        }, 150);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update meta description if exists
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = lang === 'id' 
                ? 'Nereus Interior - Toko furnitur modern dan elegan'
                : 'Nereus Interior - Modern and elegant furniture store';
        }

        // Show language change notification
        showLanguageNotification(lang);

    } catch (error) {
        console.error('Error switching language:', error);
    }
}

function showLanguageNotification(lang) {
    const notification = document.createElement('div');
    notification.className = 'notification language-notification';
    notification.textContent = lang === 'id' 
        ? 'Bahasa diubah ke Indonesia' 
        : 'Language changed to English';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === currentLang) {
            btn.classList.add('active');
        }
    });
}

function updateContent() {
    try {
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.getAttribute('data-i18n').split('.');
            let value = translations[currentLang];
            
            // Safely navigate through translation keys
            for (const key of keys) {
                if (!value || !value[key]) {
                    console.warn(`Translation key "${key}" not found in language "${currentLang}"`);
                    continue;
                }
                value = value[key];
            }
            
            element.textContent = value;
        });
    } catch (error) {
        console.error('Error updating content:', error);
    }
}

// Initialize language switching functionality
updateLanguageButtons();
updateContent();