import { Player } from "./users";

export type Direction = 'up' | 'down' | 'left' | 'right'

export interface Coordinates
{
    x: number;
    y: number;
}

export interface StreamSlot
{
    isActive: boolean,
    isReady: boolean,
    withSound: boolean | null,
    withVideo: boolean | null,
    userId: string | null,
}

export interface Room
{
    id: string;
    scale: number;
    size: Coordinates;
    originCoordinates: Coordinates;
    backgroundImageUrl: string;
    backgroundColor: string;
    backgroundOffset?: Coordinates;
    spawnPoint: {
        x: number;
        y: number;
        direction: Direction;
    };
    objects: {
        x: number;
        y: number;
        url: string;
        scale?: number;
        xOffset?: number;
        yOffset?: number;
    }[];
    sit: Coordinates[];
    blocked: Coordinates[];
    forbiddenMovements: { xFrom: number, yFrom: number, xTo: number, yTo: number }[],
    doors: {
        x: number,
        y: number,
        targetRoomId: string,
        targetX: number,
        targetY: number
    }[];
    streamSlotCount: number;
    secret: boolean;
}

export interface RoomState {
    streams: StreamSlot[]
}

export interface RoomStateDto
{
    currentRoom: Room,
    connectedUsers: Player[],
    streams: StreamSlot[],
}