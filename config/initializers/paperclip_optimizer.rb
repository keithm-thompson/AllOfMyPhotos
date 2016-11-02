Paperclip::PaperclipOptimizer.default_options = {
    skip_missing_workers: true,
    advpng: false,
    gifsicle: false,
    jhead: false,
    jpegoptim: false,
    jpegrecompress: true,
    jpegtran: false,
    optipng: false,
    pngcrush: false,
    pngout: false,
    pngquant: true,
    svgo: false,
    nice: 10,             # Nice level (defaults to 10)
    threads: 1,           # Number of threads or disable (defaults to number of processors)
    verbose: false,       # Verbose output (defaults to false)
    pack: nil,            # Require image_optim_pack or disable it, by default image_optim_pack will be used if available,
    allow_lossy: true,   # Allow lossy workers and optimizations (defaults to false)
    jpegrecompress: {
        quality: 2          # JPEG quality preset: 0 - low, 1 - medium, 2 - high, 3 - veryhigh (defaults to 3)
    },
    pngquant: {
        quality: 100..100,  # min..max - don't save below min, use less colors below max (both in range 0..100; in yaml - !ruby/range 0..100) (defaults to 100..100)
        speed: 3            # speed/quality trade-off: 1 - slow, 3 - default, 11 - fast & rough (defaults to 3)
    }
}
