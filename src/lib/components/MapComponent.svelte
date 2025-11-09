<script lang="ts">
	interface Location {
		name: string;
		coordinates: {
			lat: number;
			lng: number;
		};
	}

	let { location }: { location: Location } = $props();

	// Generate a static map URL using OpenStreetMap tiles via Leaflet
	// In a production app, you might want to use Google Maps, Mapbox, or Leaflet with dynamic maps
	const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${location.coordinates.lng - 0.1},${location.coordinates.lat - 0.1},${location.coordinates.lng + 0.1},${location.coordinates.lat + 0.1}&layer=mapnik&marker=${location.coordinates.lat},${location.coordinates.lng}`;
</script>

<div class="map-container">
	<div class="location-info">
		<h4>📍 {location.name}</h4>
		<p class="coordinates">
			{location.coordinates.lat.toFixed(4)}°N, {Math.abs(location.coordinates.lng).toFixed(4)}°{location.coordinates.lng >= 0 ? 'E' : 'W'}
		</p>
	</div>

	<div class="map-wrapper">
		<iframe
			title="Map of {location.name}"
			src={mapUrl}
			frameborder="0"
			scrolling="no"
		></iframe>
	</div>

	<div class="map-links">
		<a
			href="https://www.google.com/maps/search/?api=1&query={location.coordinates.lat},{location.coordinates.lng}"
			target="_blank"
			rel="noopener noreferrer"
		>
			Open in Google Maps
		</a>
		<a
			href="https://www.openstreetmap.org/?mlat={location.coordinates.lat}&mlon={location.coordinates.lng}#map=13/{location.coordinates.lat}/{location.coordinates.lng}"
			target="_blank"
			rel="noopener noreferrer"
		>
			Open in OpenStreetMap
		</a>
	</div>
</div>

<style>
	.map-container {
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
		padding: 1.5rem;
		margin-top: 1rem;
	}

	.location-info {
		margin-bottom: 1rem;
	}

	.location-info h4 {
		font-size: 1.3rem;
		color: var(--color-gold);
		margin-bottom: 0.5rem;
	}

	.coordinates {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		font-family: 'Courier New', monospace;
	}

	.map-wrapper {
		position: relative;
		width: 100%;
		height: 400px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid var(--color-gold);
		margin-bottom: 1rem;
	}

	.map-wrapper iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	.map-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.map-links a {
		padding: 0.5rem 1rem;
		background: rgba(139, 0, 0, 0.2);
		border: 1px solid var(--color-accent);
		border-radius: 4px;
		font-size: 0.9rem;
		transition: all 0.3s ease;
	}

	.map-links a:hover {
		background: rgba(139, 0, 0, 0.4);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.map-wrapper {
			height: 300px;
		}

		.map-links {
			flex-direction: column;
		}

		.map-links a {
			text-align: center;
		}
	}
</style>
